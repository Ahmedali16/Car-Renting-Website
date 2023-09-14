import { Box, Button, Flex, Image, Text, color } from "@chakra-ui/react";
import React from "react";
import Tag1 from "./images/01..png";
import Tag2 from './images/02..png'
import Tag3 from './images/03..png'
import Tag4 from './images/04..png'
import Tag5 from './images/05..png'
import ease from "./images/ease.png";
import gps from './images/gps.png'
import comfort from './images/comfort.png'
import drivesoon from './images/DrivingSoon.png'
import fullday from './images/TwentyFourBySeven.png'
import affordable from './images/affordable.png' 

function Benefits() {
  return (
    <>
      <Box textAlign={"center"} m={5} mt={10}>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          <span style={{ color: "#00aff5" }}>Blablacar</span> benefits you with
        </Text>
        <Text>
          Easily rent your fav vehicles from our list.Best prices ever compare
          to any company in town.
        </Text>
      </Box>
      <Box>
        <Box bg={"#ebf9fe"} _hover={{boxShadow:"lg"}} p={10} mx={[10,10,30,44]} my={8}>
          <Flex
            justifyContent={"space-between"}  flexDirection={["column", "column", "row"]} >
            <Flex mx={"auto"} alignItems={"center"} >
              <Image src={Tag1} boxSize={["8","10","12"]}></Image>
              <Flex flexDirection={"column"} m={5}>
                <Text fontWeight={"bold"} fontSize={"2xl"} m={2}>
                  Ease of booking
                </Text>
                <Text> Easily book your fav car with simple steps.</Text>
              </Flex>
            </Flex>

            <Flex mx={"auto"}>
              <Image src={ease}boxSize={"44"}></Image>
            </Flex>
          </Flex>
        </Box>
        
        <Box bg={"#ebf9fe"} _hover={{boxShadow:"lg"}} p={10} mx={[10,10,30,44]} my={8}>
          <Flex justifyContent={"space-between"}  flexDirection={["column-reverse", "column-reverse", "row"]} >
               <Flex mx={"auto"}>
              <Image src={gps} boxSize={"44"}></Image>
            </Flex>
            <Flex mx={"auto"} alignItems={"center"} >
              <Image src={Tag2} boxSize={["8","10","12"]}></Image>
              <Flex flexDirection={"column"} m={5}>
                <Text fontWeight={"bold"} fontSize={"2xl"} m={2}>
                  GPS Tracking
                </Text>
                <Text> In ase of any emergerncy we can find a vehicles location </Text>
              </Flex>
            </Flex>

         
          </Flex>
        </Box>
      
        <Box bg={"#ebf9fe"} _hover={{boxShadow:"lg"}} p={10} mx={[10,10,30,44]} my={8}>
          <Flex
            justifyContent={"space-between"}  flexDirection={["column", "column", "row"]} >
            <Flex mx={"auto"} alignItems={"center"} >
              <Image src={Tag3} boxSize={["8","10","12"]}></Image>
              <Flex flexDirection={"column"} m={5}>
                <Text fontWeight={"bold"} fontSize={"2xl"} m={2}>
                  Comfortable and Secure Rides
                </Text>
                <Text> Best maintainable cars in town.</Text>
              </Flex>
            </Flex>

            <Flex mx={"auto"}>
              <Image src={comfort} boxSize={"52"}></Image>
            </Flex>
          </Flex>
        </Box>  

          <Box bg={"#ebf9fe"} _hover={{boxShadow:"lg"}} p={10} mx={[10,10,30,44]} my={8}>
          <Flex justifyContent={"space-between"}  flexDirection={["column-reverse", "column-reverse", "row"]} >
               <Flex mx={"auto"}>
              <Image src={affordable} boxSize={"52"}></Image>
            </Flex>
            <Flex mx={"auto"} alignItems={"center"} >
              <Image src={Tag4} boxSize={["8","10","12"]}></Image>
              <Flex flexDirection={"column"} m={5}>
                <Text fontWeight={"bold"} fontSize={"2xl"} m={2}>
                 Affordable prices                </Text>
                <Text> Best prices from all over the town. </Text>
              </Flex>
            </Flex>

         
          </Flex>
        </Box> 

          <Box bg={"#ebf9fe"} _hover={{boxShadow:"lg"}} p={10} mx={[10,10,30,44]} my={8}>
          <Flex
            justifyContent={"space-between"}  flexDirection={["column", "column", "row"]} >
            <Flex mx={"auto"} alignItems={"center"} >
              <Image src={Tag5} boxSize={["8","10","12"]}></Image>
              <Flex flexDirection={"column"} m={5}>
                <Text fontWeight={"bold"} fontSize={"2xl"} m={2}>
                  24/7 Service                </Text>
                <Text> All day Full time service here..</Text>
              </Flex>
            </Flex>

            <Flex mx={"auto"}>
              <Image src={fullday} boxSize={"52"}></Image>
            </Flex>
          </Flex>
        </Box>  

         <Box bg={"#ebf9fe"} _hover={{boxShadow:"lg"}} p={16}  mt={8}>
          <Flex
            justifyContent={"space-between"}  flexDirection={["column", "column", "row"]} >
            <Flex mx={"auto"} alignItems={"center"} >
              <Flex flexDirection={"column"} m={5}>
                <Text  fontWeight={"bold"} fontSize={"2xl"} m={2}> Driving in your car soon </Text>
                <Text textAlign={"center"}> Easily book your car.</Text>
              <Button bg={"#00aff5"} mx={"auto"} my={2} color={"white"} _hover={{color:"black"}} width={"fit-content"} >Offerr Ride</Button>
              </Flex>
            </Flex>

            <Flex mx={"auto"}>
              <Image src={drivesoon} boxSize={"52"}></Image>
            </Flex>
          </Flex>
        </Box>   
      </Box>
    </>
  );
}

export default Benefits;
