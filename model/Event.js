import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    target: {
      type: number,
      required: true,
    },
    currentAmount: {
      type: number,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    catogery: [
      {
        type: String,
      },
    ],
    socialMediaLinks: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
