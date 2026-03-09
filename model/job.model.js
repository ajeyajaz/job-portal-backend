import mongoose from "mongoose";
import { skillSchema } from './skill.model.js'
import { JOB_TYPE_LIST, JOB_STATUS_LIST, JOB_STATUS } from "../constants.js";

const jobSchema = new mongoose.Schema({

  title: {
    type: String,
    maxLength: 50,
    required: true,
    trim : true
  },

  title_lc: {
    type: String,
    index: true,
    lower: true,
    trim : true
  },

  description: {
    type: String,
    maxLength: 255,
    required: true,
    trim : true
  },

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    index: true
  },

  location: {
    type: String,
    maxLength: 255,
    trim: true,
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
    type: String,
    enum: JOB_TYPE_LIST,
    index: true
  },

  experienceRequired: {
    type: Number,
    min: 0
  },

  skillsRequired: [skillSchema],

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  status: {
    type: String,
    enum: JOB_STATUS_LIST,
    default: JOB_STATUS.OPEN
  }

}, { timestamps: true });


export const Job = mongoose.model("Job", jobSchema)