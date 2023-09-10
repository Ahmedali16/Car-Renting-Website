import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs'
import React from 'react'
import customer from '../images/Services/quality.png'

function CustomerReview() {
  return (
    <>
    
    <Box mx={20} my={20}>
    <Flex justifyContent="space-between" alignItems="center">
  <Heading fontSize={22} m={5}>What Our Customers Say</Heading>
  <Flex>
    <Icon
    color={"gray.400"}
      mx={1}
      boxSize={10}
      as={BsArrowLeftCircle}
      _hover={{ color: 'black' }}
    />
    <Icon
    color={"gray.400"}
      mx={1}
      boxSize={10}
      as={BsArrowRightCircle}
      _hover={{ color: 'black' }}
    />
  </Flex>
</Flex>
<Box m={5}>
<Text >“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”</Text>
<Flex mt={2}>
  <Image src={customer}></Image>
  <Flex flexDirection={"column"}>
    <Text fontWeight={"bold"}>Ahmed ali</Text>
    <Text>from<span style={{color:"gray"}}> Lahore</span></Text>
    </Flex>
</Flex>
</Box>



    </Box>
    </>
  )
}

export default CustomerReview