import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Items", itemsSchema);
