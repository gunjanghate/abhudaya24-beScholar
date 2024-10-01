import React from 'react'
import HomePage from '@/app/components/HomePage'
import { Box } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
const page = () => {
    // const theme = useColorModeValue("white","black")
  return (
    <div>
        <Box>
        <HomePage />

        </Box>
    </div>
  )
}

export default page