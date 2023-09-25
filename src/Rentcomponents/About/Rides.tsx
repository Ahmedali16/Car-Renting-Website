import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Rides(props:any) {
    const {data} = props;
    const rideInfo = data[0];
    // const {Rides}  = data
  return (
    <>
    <Box my={10} color={"white"} p={2} shadow={"lg"}    bgColor={"black"}>
   <Flex justifyContent={"space-evenly"}  >
    <Box boxShadow={"md"} alignContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={["20","18","20"]}>Rides</Text>
    <Text fontSize={["20","18","20"]}> {rideInfo.Rides}</Text>
    </Box>
    <Box boxShadow={"md"} alignContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={["20","18","20"]}>Cars</Text>
    <Text fontSize={["20","18","20"]}>{rideInfo.Cars}</Text>
    </Box>
    <Box boxShadow={"md"} alignContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={["20","18","20"]}>Pickup Location</Text>
    <Text fontSize={["20","18","20"]}>{rideInfo.PickupLocation}</Text>
    </Box>
    <Box boxShadow={"md"} alignContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={["20","18","20"]}>Happy Customers</Text>
    <Text fontSize={["20","18","20"]}>{rideInfo.HappyCustomers}</Text>
    </Box>
</Flex>
    </Box>
    </>
  )
}

export default Rides