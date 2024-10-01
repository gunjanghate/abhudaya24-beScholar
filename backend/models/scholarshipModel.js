import mongoose from 'mongoose';

const scholarshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  percentageEligibility: {
    type: Number,
    required: true,
    min: 0, // Minimum percentage value
    max: 100 // Maximum percentage value
  },
  guidelines: {
    type: String,
    required: true
  },
  maxAmount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);
export default Scholarship;
