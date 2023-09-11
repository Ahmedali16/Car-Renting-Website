import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import quality from "../images/Services/quality.png";
import prices from "../images/Services/prices.png";
import booking from "../images/Services/booking.png";

function ServicesBenefits() {
  return (
    <>
      <Box bg={"black"} color={"white"} textAlign={"center"} mt={5} >
        <Box  p={10} > 
          <Heading mt={10}>Our Services & Benefits</Heading>
          <Text mt={10}  textAlign={"center"} mx={"auto"}>
            To make renting easy and hassle free, we provide a variety of
            services and advantages.We have you covered with a variety of
            vehicles and flexible rental terms
          </Text>
        </Box>

        <Flex
        
          justifyContent={"center"}
          flexDirection={["column", "column", "row"]}
        p={[5,5,2]}
       
        >
          <Flex justifyContent={"center"}>
            <Box m={3} textAlign="center" w={["324px","324px","230px","324px"]}>
              <Image textAlign={"center"} my={3} src={quality} mx={"auto"} />
              <Text m={2}>Quality Choice</Text>
              <Text m={3} >
                We offer a wide range of high-quality vehicles to choose from
                including luxury Cars, Suv's, Van and more.
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={"center"}>
            <Box m={3} textAlign="center" h={"176px"}w={["324px","324px","230px","324px"]}>
              <Image textAlign={"center"} my={3} src={prices} mx={"auto"} />
              <Text m={2}>Quality Choice</Text>
              <Text m={3}>
                We offer a wide range of high-quality vehicles to choose from
                including luxury Cars, Suv's, Van and more.
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={"center"}>
          <Flex justifyContent={"center"}>
            <Box m={3} textAlign="center" h={"176px"}w={["324px","324px","230px","324px"]}>
              <Image textAlign={"center"} my={3} src={booking} mx={"auto"} />
              <Text m={2}>Quality Choice</Text>
              <Text m={3}>
                We offer a wide range of high-quality vehicles to choose from
                including luxury Cars, Suv's, Van and more.
              </Text>
            </Box>
          </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default ServicesBenefits;
