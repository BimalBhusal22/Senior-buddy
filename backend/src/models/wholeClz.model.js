import mongoose from "mongoose";

const wholeClzSchema = new mongoose.Schema(
  {
    clzInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClzInfo",
      required: true,
    },
    mentor1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },
    noOfOtherMentors: {
      type: Number,
      default: 0,
      required: true,
    },
    otherMentors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
      },
    ],
  },
  { timestamps: true }
);

export const WholeClz = mongoose.model("WholeClz", wholeClzSchema);
