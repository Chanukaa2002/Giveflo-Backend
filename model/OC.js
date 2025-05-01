import mongoose from "mongoose";

const ocSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    contactNo: {
      type: Sting,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const OC = mongoose.model("OC", ocSchema);
