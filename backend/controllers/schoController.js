import mongoose from "mongoose";
import Scholarship from "../models/scholarshipModel.js";
import Student from "../models/studentModel.js";

// Fetch all scholarships
export const getAllScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();   
    res.status(200).json(scholarships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching scholarships", error });
  }
};

// Create a new scholarship
export const createScholarship = async (req, res) => {
  const { name, description, percentageEligibility, guidelines, maxAmount } = req.body;

  // Validate required fields
  if (!name || !description || percentageEligibility == null || !guidelines || !maxAmount) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a new scholarship
    const newScholarship = new Scholarship({
      name,
      description,
      percentageEligibility, // Adjusted field
      guidelines,
      maxAmount,
    });

    const savedScholarship = await newScholarship.save();
    res.status(201).json(savedScholarship);
  } catch (error) {
    res.status(500).json({ message: "Error creating scholarship", error });
  }
};

// Apply for a scholarship
export const applyForScholarship = async (req, res) => {
  const { studentId, scholarshipId } = req.body;

  try {
    // Fetch the student and the scholarship by their IDs
    const student = await Student.findById(studentId);
    const scholarship = await Scholarship.findById(scholarshipId);

    // If student or scholarship does not exist
    if (!student || !scholarship) {
      return res.status(404).json({ message: "Student or Scholarship not found" });
    }

    // Check if the student has already applied for this scholarship
    if (student.appliedScholarships.includes(scholarshipId)) {
      return res.status(400).json({ message: "You have already applied for this scholarship" });
    }

    // Check if the student's percentage meets the scholarship's eligibility criteria
    if (student.percentage < scholarship.percentageEligibility) {
      return res.status(400).json({ message: `You need at least ${scholarship.percentageEligibility}% to apply for this scholarship` });
    }

    // Add the scholarship to the student's appliedScholarships array
    student.appliedScholarships.push(scholarshipId);
    await student.save();

    res.status(200).json({ message: "Scholarship application successful" });
  } catch (error) {
    res.status(500).json({ message: "Error applying for scholarship", error });
  }
};
