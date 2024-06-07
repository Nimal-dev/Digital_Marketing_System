const productModels = require("../Models/productModel");


const multer = require("multer");
const path = require("path");
const ProductModel = productModels.product;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

exports.addProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error uploading file', details: err });
    }

    try {
      const { name, description, price } = req.body;
      const sellerId = req._id;

      if (!req.file) {
        return res.status(400).json({ error: 'Image is required' });
      }

      const imageUrl = `/uploads/${req.file.filename}`;

      const productParam = {
        name,
        description,
        price,
        imageUrl,
        sellerId,
      };

      await ProductModel.create(productParam);
      res.json({ message: 'Product added successfully' });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};

// Function to view products for a specific seller
exports.viewProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({ sellerId: req._id });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Function to delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await ProductModel.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Function to update a product
exports.updateProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error uploading file', details: err });
    }

    try {
      const { id, name, description, price } = req.body;

      let updateFields = {
        name,
        description,
        price,
      };

      if (req.file) {
        const imageUrl = `/uploads/${req.file.filename}`;
        updateFields.imageUrl = imageUrl;
      }

      await ProductModel.findByIdAndUpdate(id, updateFields, { new: true });
      res.json({ message: 'Product updated successfully' });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
};
