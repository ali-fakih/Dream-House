import React from 'react';

const PropertyCard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-64 object-cover object-center" src={require("../../Assets/images/property-4.jpg")} alt="Property" />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Home in Merrick Way</h2>
                    <p className="mt-2 text-sm text-gray-600">Enchantine three bedroom, three bath home with spacious one bedroom, one bath...</p>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex items-center mr-4">
                                <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8v.01M4 12v.01M4 16v.01M8 4h.01M12 4h.01M16 4h.01M20 8v.01M20 12v.01M20 16v.01M8.589 19.375l1.412 1.416 6.997-6.997-1.412-1.416-6.997 6.997zM9.005 9.793l1.416-1.414 6.993 6.993-1.416 1.414-6.993-6.993z" /></svg>
                                <span className="text-sm text-gray-600">3 bedrooms</span>
                            </div>
                            <div className="flex items-center mr-4">
                                <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <span className="text-sm text-gray-600">3 bathrooms</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h.01M12 20s-8-4.5-8-10c0-3.86 5.33-7 8-7s8 3.14 8 7c0 5.5-8 10-8 10z" /><circle cx={12} cy={10} r={3} /></svg>
                                <span className="text-sm text-gray-600">4300 sq ft</span>
                            </div>
                        </div>
                        <div className="text-lg font-semibold text-gray-800">$540,000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
