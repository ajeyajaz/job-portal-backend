import mongoose from "mongoose";


export const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
    }
}, {timestamps: true});



export const Skill = mongoose.model("Skill", skillSchema);