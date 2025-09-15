const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // Cloudinary URL
    category: {
      type: String,
      required: true,
      enum: ["Vegetables", "Fruits", "Plants", "Seeds", "Pesticides"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
