const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
  },
  userId: {
    type: String,
    required: true,
  },
  cartId: {
    type: String,
    required: true,
  },
  addressId: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Failed"],
  },
  orderStatus: {
    type: String,
    enum: [
      "Pending",
      "Delivered",
      "Cancelled",
    ],
  },
  deliveryTime: {
    type: Date,
  },
  cartAmount: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  deliveryFee: {
    type: Number,
  },
  taxAmount: {
    type: Number,
  },
  grandTotal: {
    type: Number,
  },
  discountAmount: {
    type: Number,
  },
  notes: {
    type: String,
  },
  cartItems: {
    type: Array,
  },
  selfPickup: {
    type: Boolean,
    default: false,
  },
  Orderdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
