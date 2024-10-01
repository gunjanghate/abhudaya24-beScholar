import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Ensures email is stored in lowercase
  },
  appliedScholarships: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Scholarship'
    }
  ],
  percentage: {
    type: Number,
    required: true,
    min: 0, // 
    max: 100 // M
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Student = mongoose.model('Student', studentSchema);
export default Student;
