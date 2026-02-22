import mongoose from "mongoose";

export const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 255,
        required:true
    }
},{ timestamps:true })


export const Role = mongoose.model("Role", roleSchema);

