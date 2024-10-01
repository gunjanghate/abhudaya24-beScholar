import Student from "../models/studentModel.js";


export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createStudent = async (req, res) => {
    try {
      const { name, email, percentage } = req.body;
  
      // Check if all required fields are present
      if (!name || !email || percentage === undefined) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      
      const student = new Student({
        name,
        email,
        percentage,
        appliedScholarships: [] 
      });
  
      
      await student.save();
  
      // Return a success message or the created student
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
  
