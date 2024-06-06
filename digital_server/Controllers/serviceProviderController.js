
// const authmodels = require("../Models/authModel");
const packagemodels = require("../Models/packageModel");

// const bcrypt = require("bcrypt");

// const providerModel = providermodels.provider;
// const authModel = authmodels.auth;
const packageModel = packagemodels.package;




exports.AddPackage = async (req, res) => {
    try {
      const packageparam = {
        packagename: req.body.packagename,
        services: req.body.services, // Array of services
        packagePrice: req.body.packagePrice,
        createdBy: req._id
      };
      await packageModel.create(packageparam);
      res.json("success");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  


  // Function to view packages
// adminController.js
exports.viewPackages = async (req, res) => {
    try {
        const packages = await packageModel.find({ createdBy: req._id });
        res.json(packages);
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

  
  // Function to delete a package
  exports.deletePackage = async (req, res) => {
    try {
      const { id } = req.body;
      await packageModel.findByIdAndDelete(id);
      res.json({ message: "Package deleted successfully" });
    } catch (error) {
      console.error("Error deleting package:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  exports.deleteService = async (req, res) => {
    try {
        const serviceId = req.body.id;
        const service = await serviceModel.findById(serviceId);
        
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        
        // Delete the Service
        await serviceModel.findByIdAndDelete(serviceId);
        
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.error("Error in deleting Service:", error);
        res.status(500).json({ error: "An error occurred while deleting the Service" });
    }
};
  
