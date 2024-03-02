const RealEstate = require('../models/realestate');

// Controller methods
const realEstateController = {
  // Create a new real estate entry
  create: async (req, res) => {
    try {
      const newRealEstate = await RealEstate.create(req.body);
      res.status(201).json(newRealEstate);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get all real estate entries
  getAll: async (req, res) => {
    try {
      const realEstates = await RealEstate.find();
      res.status(200).json(realEstates);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single real estate entry by ID
  getById: async (req, res) => {
    try {
      const realEstate = await RealEstate.findById(req.params.id);
      if (!realEstate) {
        return res.status(404).json({ message: 'Real estate not found' });
      }
      res.status(200).json(realEstate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a real estate entry by ID
  updateById: async (req, res) => {
    try {
      const updatedRealEstate = await RealEstate.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRealEstate) {
        return res.status(404).json({ message: 'Real estate not found' });
      }
      res.status(200).json(updatedRealEstate);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a real estate entry by ID
  deleteById: async (req, res) => {
    try {
      const deletedRealEstate = await RealEstate.findByIdAndDelete(req.params.id);
      if (!deletedRealEstate) {
        return res.status(404).json({ message: 'Real estate not found' });
      }
      res.status(200).json({ message: 'Real estate deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = realEstateController;
