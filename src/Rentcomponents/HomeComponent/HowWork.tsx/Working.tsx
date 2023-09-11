import { Box, Card, CardBody, CardHeader, Flex, Heading, Icon, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import jeep from '../images/HowItWorks/jeep.png'
import { CalendarIcon, Search2Icon, TimeIcon } from '@chakra-ui/icons'
function Working() {
  return (
   <>    
   <Box>
   <Box mt={10} textAlign={"center"} mx={"auto"} my={"auto"}>
     <Heading mt={10}>How it Works</Heading>
     <Text p={5}>
      Rent a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online.
     </Text>
   </Box>

   <Flex flexDirection={["column" ,"column" ,"row"]}>
    <Box flex={1}>
      <Card mx={[5,10,20]}>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Browse and select
        </Heading>
        <Flex justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
          <Box bg={"gray.200"} p={1} m={2} borderRadius={10} > <Icon m={1} height={"12"}    ><Search2Icon/></Icon></Box>
          
          <Text pt='2' fontSize='sm'>
         Choose from widr range of premium cars, select the pickup and return dates and locations that suits you the best.
        </Text></Flex>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Browse and select
        </Heading>
        <Flex justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
          <Box bg={"gray.200"} p={1} m={2} borderRadius={10} > <Icon height={"12"}  m={1}  ><CalendarIcon/></Icon></Box>
          
          <Text pt='2' fontSize='sm'>
         Choose from widr range of premium cars, select the pickup and return dates and locations that suits you the best.
        </Text></Flex>
        
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Browse and select
        </Heading>
        <Flex justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
          <Box bg={"gray.200"} p={1} m={2} borderRadius={10} > <Icon height={"12"}  m={1}  ><TimeIcon/></Icon></Box>
          
          <Text pt='2' fontSize='sm'>
         Choose from widr range of premium cars, select the pickup and return dates and locations that suits you the best.
        </Text></Flex>
        
      </Box>
    </Stack>
  </CardBody>
</Card>


</Box>
    <Box flex={1} bg={"#F5F5F5"} p={10} borderRadius={'2xl'} > <Image alignItems={"center"} alignContent={"center"}  mx={"auto"} src={jeep}></Image></Box>
   </Flex>
   </Box>
  
   </>
  )
}

export default Working