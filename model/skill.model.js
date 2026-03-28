import mongoose from "mongoose";


export const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
    },

    name_lc: {
        type: String,
        unique: true,
    }

}, {timestamps: true});


skillSchema.pre('save', function(){
    if(this.isModified('name')){
        this.name_lc = this.name.toLowerCase();
    }
})


export const Skill = mongoose.model("Skill", skillSchema);