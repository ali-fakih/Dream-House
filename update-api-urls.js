const fs = require('fs');
const path = require('path');

// Configuration
const rootDir = path.resolve(__dirname, 'frontend/src');
const apiConfig = "import API_URL from '../../config/api';";
const shortApiConfig = "import API_URL from '../config/api';";

// Function to recursively search for files
function findJsFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(findJsFiles(filePath));
        } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.jsx'))) {
            results.push(filePath);
        }
    }
    
    return results;
}

// Function to process a file
function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const relativeDepth = path.relative(rootDir, filePath).split(path.sep).length - 1;
        
        // Skip files that already have the import
        if (content.includes('import API_URL from ')) {
            console.log(`Skipping ${filePath} - already has API_URL import`);
            return;
        }
        
        // Check if the file has axios and localhost:3000
        if (content.includes('axios') && content.includes('localhost:3000')) {
            // Add API_URL import if it doesn't exist
            if (content.includes('import axios from')) {
                const importStmt = relativeDepth > 1 ? apiConfig : shortApiConfig;
                content = content.replace(/import axios from ['"](.*?)['"];/, 
                    (match) => `${match}\n${importStmt}`);
            }
            
            // Replace localhost:3000 with API_URL
            content = content.replace(
                /(['"`])http:\/\/localhost:3000(\/[^'"`]*?)(['"`])/g, 
                '`${API_URL}$2`'
            );
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
}

// Main function
function main() {
    const jsFiles = findJsFiles(rootDir);
    console.log(`Found ${jsFiles.length} JS/JSX files`);
    
    let updatedFiles = 0;
    for (const file of jsFiles) {
        processFile(file);
        updatedFiles++;
    }
    
    console.log(`Updated ${updatedFiles} files`);
}

main();
