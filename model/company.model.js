import mongoose from "mongoose";


const companySchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: true,
    },
    name_lc: {
        type: String,
        lowercase: true,
        index: true
    },
    website: {
        type: String,
        maxLength: 255,
        required: true
    },
    about: {
        type: String,
        minLength: 50,
        maxLength: 1055,
        required: true
    },
    recruiter: {
        type: mongoose.ObjectId,
        ref: 'User',
        index: true,
        required: true
    }
}, {timestamps: true})


companySchema.pre('save', function(){
    if(this.isModified('name')){
        this.name_lc = this.name.toLowerCase();
    }

    console.log('this', this);
});

export const Company = mongoose.model('Company', companySchema);

