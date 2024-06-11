const { Cart, CartItem } = require('../Models/cartModel');
const { Product } = require('../Models/productModel');

exports.addToCart = async (req, res) => {
  const { customerId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId: customerId });
    if (!cart) {
      cart = new Cart({ userId: customerId, items: [] });
    }
    const itemExists = cart.items.some(item => item.productId.toString() === productId);
    if (!itemExists) {
      cart.items.push(new CartItem({ productId }));
    } else {
      return res.json({ success: false, message: 'Product already in cart' });
    }
    await cart.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.json({ success: false, message: 'Error adding product to cart' });
  }
};

exports.getCart = async (req, res) => {
  const { customerId } = req.params;
  try {
    const cart = await Cart.findOne({ userId: customerId }).populate('items.productId');
    if (!cart) {
      return res.json({ items: [] });
    }
    res.json({ items: cart.items });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.json({ items: [] });
  }
};

exports.removeFromCart = async (req, res) => {
  const { customerId, productId } = req.params;
  try {
    const cart = await Cart.findOne({ userId: customerId });
    if (!cart) {
      return res.json({ success: false, message: 'Cart not found' });
    }

    // Remove the item from the cart
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();
    
    res.json({ success: true, message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.json({ success: false, message: 'Error removing item from cart' });
  }
};
