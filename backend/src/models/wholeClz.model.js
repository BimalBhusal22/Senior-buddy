import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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
      required: [true, "No of other mentors is a required field"],
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

wholeClzSchema.plugin(mongooseAggregatePaginate);

export const WholeClz = mongoose.model("WholeClz", wholeClzSchema);
