
import carbg from "../images/Carbg.png"
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
// import {AOS} from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import carpicBanner from '../images/lcruiser.png'; 


function Banner() {
  return (
   <>
   <Box mt={20}>
   <Flex bg={"#0F0F0F"}   flexDirection={["column", "column", "row"]}>
        <Box flex="1">
          <Flex flexDirection={"column"}>
            <Text
             color={"white"}
              fontSize={50}
              
              p={20}
              fontWeight="bold"
            >
             Find ,book ,rental car in <span>Easy</span> steps
             <Text   fontSize={16} fontWeight={"normal"}>
              Rent a car at the best prices compared to all over the town
            </Text>
            </Text>
          </Flex>
        </Box>
        <Box flex="1" mx="auto" my="auto">
          <Image src={carpicBanner}  alt="Car Banner" bg="transparent" />
        </Box>
      </Flex>
   </Box>
      </>
  )
}

export default Banner