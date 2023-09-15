import React from 'react'
import { Box, Text, Flex, Image, Container, VStack } from '@chakra-ui/react'
import mainpic from '../HomeComponent/images/lcruiser.png'
function AboutPage() {
  return (
    <>
    <Box
    color={"black"}
      backgroundImage="linear-gradient(135deg, teal.400 50%, white 50%)"
      height="80vh"
    >
      <Container maxW="container.xl">
        <Flex p={4} justifyContent="space-between" alignItems="center">
          <Image src="/your-logo.png" alt="Company Logo" width="100px" />
          <Text fontSize="2xl" fontWeight="bold" >
            About Us
          </Text>
          <Box />
        </Flex>

        <VStack spacing={8} mt={20} alignItems="center">
      <Flex>    <Box><Image
            src={mainpic}
            height={"300px"}
            w={"400px"}
            alt="Car Image"
         
            borderRadius="full"
          /></Box>
       
        <Box alignContent={"center"} alignItems={"center"}>
        <Text fontSize="3xl" fontWeight="bold" >
            Welcome to Rent-A-Car  </Text>
          <Text fontSize="xl">
          Best leading company for providing best maaintaied vehicles to our customers with best rating in safety
          </Text></Box></Flex>
        </VStack>
      </Container>
    </Box>
    </>
  )
}

export default AboutPage