import React from "react";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsBagCheck} from "react-icons/bs"
import {FaRegHandshake} from "react-icons/fa"
import {LiaCarSideSolid} from "react-icons/lia"
import Rent from "./rent.avif"; // Assuming that "rent.avif" is an image file you want to import

function Guide() {
  return (
    <Flex p={5} flexDirection={["column", "column", "row"]} >
      <Box flex="1" mx="auto" my="auto">
        <Image src={Rent} alt="Car Banner" bg="transparent" />
      </Box>
      <Box flex="1" mt={5}>
        <Flex flexDirection="column" >
          <Flex >
            <Box m={5}>
              <Icon boxSize={10} as={AiOutlineCalendar} />
              <Text mt={2}><span style={{fontWeight:"bold"}}>Flexible Dates</span> Choose any date , time and length you'd  like to rent a Car for</Text>
            </Box>
            <Box  m={5}>
              <Icon boxSize={9} as={BsBagCheck} />
              <Text mt={2}><span style={{fontWeight:"bold"}}>Flexible Dates</span> Choose any date , time and length you'd  like to rent a Car for</Text>
            </Box>
          </Flex>
          <Flex >
            <Box  m={5}>
              <Icon boxSize={10} as={FaRegHandshake} />
              <Text mt={2}><span style={{fontWeight:"bold"}}>Flexible Dates</span> Choose any date , time and length you'd  like to rent a Car for</Text>
            </Box>
            <Box  m={5}>
              <Icon boxSize={10} as={LiaCarSideSolid} />
              <Text mt={2}><span style={{fontWeight:"bold"}}>Flexible Dates</span> Choose any date , time and length you'd  like to rent a Car for</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Guide;
