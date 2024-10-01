"use client"; 

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [studentPercentage, setStudentPercentage] = useState(0); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const studentId = "66f8ef4c65ca84d4482b5a7d"; 

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/scholarship"
        );
        setScholarships(response.data);
      } catch (err) {
        setError("Error fetching scholarships");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/students/${studentId}`
        );
        setStudentPercentage(response.data.percentage); 
      } catch (err) {
        console.error("Error fetching student data:", err);
      }
    };

    fetchScholarships();
    fetchStudentData();
  }, [studentId]); 

  const handleApply = (scholarship) => {
    const isEligible = checkEligibility(scholarship, studentPercentage);
    if (isEligible) {
      alert(`You are eligible to apply for ${scholarship.name}!`);
      
    } else {
      alert(
        `You are not eligible to apply for ${scholarship.name}. You need at least ${scholarship.percentageEligibility}% to apply.`
      );
    }
  };

  const checkEligibility = (scholarship, studentPercentage) => {
    console.log("Student Percentage:", studentPercentage);
    return studentPercentage >= scholarship.percentageEligibility;
  };

  if (loading) return <div div className='flex justify-center items-center text-2xl'>Loading...</div>;
  if (error) return <div div className='flex justify-center items-center text-2xl'>{error}</div>;

  return (
    <div className='ml-32 md:ml-0 lg:ml-0 lg:px-5 px-5   mt-10 mb-5 flex flex-col justify-center items-center shadow-md shadow-gray-400 w-3/4  py-2'>
      <h1 className='text-3xl font-bold'>Scholarship Dashboard</h1>
      <Accordion allowMultiple>
        <div className="show-dash flex flex-col gap-8 bg-orange-200 px-5 py-3 border-2 border-red-500 rounded-md">
        {scholarships.map((scholarship) => (
          <AccordionItem key={scholarship._id}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" className="font-semibold text-lg ">
                      {scholarship.name}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <div className="desc bg-white border-1 border-black p-2 flex flex-col gap-2">

                  <p>{scholarship.description}</p>
                  <p className='font-bold'>Eligibility: {scholarship.percentageEligibility}%</p>
                  <p >Max Amount: ₹{scholarship.maxAmount}</p>
                  <p>Guidelines: {scholarship.guidelines}</p>
                  <Button className='bg-blue-400 p-1 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-bold ' onClick={() => handleApply(scholarship)}>
                    Apply
                  </Button>
                    </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
        </div>
      </Accordion>
    </div>
  );
};

export default Scholarships;
