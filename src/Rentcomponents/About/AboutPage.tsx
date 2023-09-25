import React from "react";
import Slider from './Slider/Slider'
import { Box, Text, Flex, Image, Container, VStack } from "@chakra-ui/react";
import mainpic from "../About/images/lc.png";
import Rides from "./Rides";
// import CarTime from './images/CarTime.p'
const CarTime = require("./images/Car3.mp4") 
function AboutPage() {

  const RidesData = [
    {
      Rides: "1947",
      Cars: 390,
      "PickupLocation": "130+",
      "HappyCustomers": "1880+",
    },
  ];
  return (
    <>
    <Box> 
  
    <video src={CarTime} style={{ width: "100%"}} autoPlay loop muted></video>
  <Rides data={RidesData} />
    </Box>
      <Box
      borderRadius={10}
      shadow={"xl"}
        color={"black"}
      
        backgroundImage="linear-gradient(135deg, teal.300 50%, white 50%)"
   
        mt={20}
      >
      
            <Flex  flexDirection={["column", "column", "row"]}>
        <Box flex="1">
          <Flex flexDirection={"column"}>
            <Text
         
              fontSize={48}
              mt={5}
              p={["5","7","18"]}
              fontWeight="bold"
            >
            Afordable Rental Company. <span style={{fontSize:"30px" ,color:"rainbowGradiant"}}>Top Safety, Comfortables</span> 
             <Text   fontSize={16} fontWeight={"normal"}>
              Rent a car at the best prices compared to all over the town
            </Text>
            </Text>
          </Flex>
        </Box>
        <Box flex="1" mx="auto" my="auto">
          <Image style={{ transform: "scaleX(-1)" }} src={mainpic}  alt="Car Banner" bg="transparent" />
        </Box>
      </Flex>

      </Box>

      
      {/* <Slider/> */}
    </>
  );
}

export default AboutPage;
