const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({

    studentID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    date:{ type: Date, default: Date.now },
    email: { type: String, required: false},
    phoneNumber: { type: String, required:false },
    status: { type: String, enum: ['present', 'absent'], required: true }
    
}, {timestamps:true})

module.exports = mongoose.model("Student",StudentSchema);
