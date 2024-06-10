const multer = require("multer");
const path = require("path");
const packageModel = require("../Models/packageModel").package;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage }).single('image');

exports.AddPackage = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error uploading file', details: err });
    }

    try {
      const providerId = req.body.providerId;

      if (!req.file) {
        return res.status(400).json({ error: 'Image is required' });
      }

      const imageUrl = `/uploads/${req.file.filename}`;
      
      const packageparam = {
        packagename: req.body.packagename,
        services: JSON.parse(req.body.services), // Array of services
        packagePrice: req.body.packagePrice,
        imageUrl,
        providerId
      };
      await packageModel.create(packageparam);
      res.json("success");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

// Function to view packages
// exports.viewPackages = async (req, res) => {
//     try {
//       let test = req.params.providerId;
//         const packages = await packageModel.find(test).populate('providerId');
//         console.log(packages);
//         res.json(packages);
//     } catch (error) {
//         console.error("Error fetching packages:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

exports.viewPackages = async (req, res) => {
  try {
      const { providerId } = req.query; // Accessing query parameter
      const packages = await packageModel.find({ providerId }).populate('providerId');
      console.log(packages);
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

// Function to delete a service
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
