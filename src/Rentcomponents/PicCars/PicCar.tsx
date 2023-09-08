import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

function PicCar() {
  return (
   <>
  
   <Box mx={20} mt={[10,10,-50]} rounded={10} p={5} boxShadow={"lg"} bg={"gray.200"} >
   <Flex  alignItems={"center"}  flexDirection={["column","column","row"]}>
    <Box flex={1} m={1}>

      <Text fontWeight={400} m={1}>Pick up location</Text>
      <Input placeholder='Enter location' bg={"white"} size='md' />
    </Box>
    <Box flex={1} m={1}>

<Text m={1}>Pick up date</Text>
<Input placeholder='Enter date' bg={"white"} size='md'  />
</Box>
<Box flex={1} m={1}>

<Text m={1}>Drop off location</Text>
<Input placeholder='Enter location' bg={"white"} size='md' />
</Box>
<Box flex={1} m={1}>

<Text m={1}>Drop off date</Text>
<Input placeholder='Enter date' bg={"white"} size='md' />
</Box>
<Box >
<Flex  justifyContent={"center"} alignItems={"center"}>
<Button  rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid' m={2}>
    Call us
  </Button>
</Flex>
</Box>
   </Flex>
   </Box>
   
   
   </>
  )
}

export default PicCar