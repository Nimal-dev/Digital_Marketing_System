
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
//   sellerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'entrepreneur',
//     required: true,
//   },
}, {
  timestamps: true,
});

const product = mongoose.model("Product", productSchema);

module.exports = {product};
