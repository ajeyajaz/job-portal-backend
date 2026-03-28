import mongoose from "mongoose";
import { JOB_STATUS_LIST, JOB_STATUS } from "../constants.js";

const jobSchema = new mongoose.Schema({

  title: {
    type: String,
    maxLength: 50,
    required: true,
  },

  title_lc: {
    type: String,
    index: true,
  },

  description: {
    type: String,
    maxLength: 1024,
    required: true,
  },

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    index: true
  },

  location: {
    type: String,
    maxLength: 255,
    index: true
  },

  salaryMin: {
    type: Number,
    min: 1000,
  },

  salaryMax: {
    type: Number,
    min: 1000
  },

  jobType: {
    type: Array,
    required: true,
    index: true
  },

  experienceRequired: {
    type: Number,
    min: 0,
    default: 0
  },

  skillsRequired: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill",
  }],

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true
  },

  status: {
    type: String,
    enum: JOB_STATUS_LIST,
    default: JOB_STATUS.OPEN,
    lowerCase: true
  }

}, { timestamps: true });



jobSchema.pre('save', function () {
  if (this.isModified('title'))
    this.title_lc = this.title.toLowerCase();
});



export const Job = mongoose.model("Job", jobSchema)