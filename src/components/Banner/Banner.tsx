import { Box, Button, Flex ,Image,Text} from '@chakra-ui/react';
import React from 'react';
// const carpicBanner = require('./carpicBanner.png');
const carpicBanner = require('./corlabg.png')
function Banner() {
  return (<>  
    <Flex bg="#1E1E1E" p={5} flexDirection={["column", "column","row"]} >

    <Box flex="1" >
      <Flex flexDirection={"column"}>
      <Text
  color="white"
  fontSize={60}
  m={6}
  fontWeight="bold"
 
>
  Elevate Your Ride
</Text>



        <Text color="white" m={3}  ml={10} fontSize={20} >Rent a car at the best prices compared to all over the town</Text>
          <Button colorScheme='teal' w={"16"} m={10} textAlign={"center"}>
   Vehicles
  </Button>
      </Flex>
    </Box>
    <Box flex="1" mx="auto" my="auto">
  <Image src={carpicBanner} alt="Car Banner" bg="transparent" />
</Box>

    
  </Flex>
  
    </>

  );
}

export default Banner;
