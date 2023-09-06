import { Box, Flex ,Heading,Icon,Text} from '@chakra-ui/react'
import React from 'react'
import { AiFillCar } from "react-icons/ai";
import {BsFillCalendarCheckFill , BsFillBagCheckFill} from "react-icons/bs"
import {IoCheckmarkDoneSharp} from "react-icons/io5"


function Working() {
  return (
    <>
    <Box mt={7}>
<Flex justifyContent={"space-between"} mx={10} flexDirection={["column","column","column","row"]}>
    <Box p={4} alignItems={"center"}>
        <Heading textAlign={"center"}>How It Works</Heading>
        <Text textAlign={"center"}>Rent a car by following these steps</Text>
    
    </Box>
    <Flex  flexDirection={"column"} alignItems ={"center"} justifyContent={"center"}>
        <Icon boxSize={16}><AiFillCar/></Icon>
        <Heading size={"md"}>Choose a Car</Heading>
        <Text textAlign={"center"}>Browse our catalouge to view hundereds of Cars</Text>
    </Flex>
    <Flex  p={4} flexDirection={"column"} alignItems ={"center"} justifyContent={"center"}>
        <Icon boxSize={12}><BsFillCalendarCheckFill/></Icon>
        <Heading size={"md"}>Pick a date</Heading>
        <Text textAlign={"center"}>Choose the Date you'd like to reant a car</Text>
    </Flex>
    <Flex p={4} flexDirection={"column"} alignItems ={"center"} justifyContent={"center"}>
        <Icon boxSize={12}><IoCheckmarkDoneSharp/></Icon>
        <Heading size={"md"}>Book your car</Heading>
        <Text textAlign={"center"}>Confirm details and book your vehicle</Text>
    </Flex>
</Flex>
    </Box>
    </>
  )
}

export default Working