import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    course: [
      {
       
          type: mongoose.ObjectId,
          ref: "Course"
        
      }
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "user",
    },
    status: {
      type: String,
      default: "Purchased",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Purchased", purchaseSchema,"Purchased");
