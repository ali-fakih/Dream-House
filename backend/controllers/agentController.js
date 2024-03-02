const Agent = require('../models/agent');
const bcrypt = require('bcryptjs');

const agentController = {
  // Create a new agent
  createAgent: async (req, res) => {
    try {
      const { fullName, email, phone, address, bio, image, password, reference } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const agent = new Agent({
        fullName,
        email,
        phone,
        address,
        bio,
        image,
        password: hashedPassword,
        reference
      });

      await agent.save();
      res.status(201).json({ message: 'Agent created successfully', agent });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update agent details
  updateAgent: async (req, res) => {
    try {
      const { fullName, email, phone, address, bio, image, password, reference } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const updates = {
        fullName,
        email,
        phone,
        address,
        bio,
        image,
        password: hashedPassword,
        reference
      };

      const agent = await Agent.findByIdAndUpdate(req.params.id, updates, { new: true });
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
      res.json({ message: 'Agent updated successfully', agent });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get all agents
  getAllAgents: async (req, res) => {
    try {
      const agents = await Agent.find();
      res.json(agents);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single agent by ID
  getAgentById: async (req, res) => {
    try {
      const agent = await Agent.findById(req.params.id);
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
      res.json(agent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete an agent
  deleteAgent: async (req, res) => {
    try {
      const agent = await Agent.findByIdAndDelete(req.params.id);
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
      res.json({ message: 'Agent deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = agentController;
