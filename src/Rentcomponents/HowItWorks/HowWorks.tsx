import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import WorkBanner from "./images/WorkBanner.png";
import PicCar from "../HomeComponent/PicCars/PicCar";
import GuideCar from "../HowItWorks/images/GuideCar.png";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import { on } from "events";
import { MdCall } from "react-icons/md";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Benefits from "./Benefits";

function HowWorks() {
  return (
    <>
      <Flex p={10} bg={"gray.50"} mt={10} flexDirection={["column", "column", "row"]}>
        <Box flex="1">
          <Flex flexDirection={"column"}>
            <Text
              //  color={"white"}
              fontSize={50}
              p={["4", "5", "20"]}
              fontWeight="bold"
            >
              Bus or carpool? Your pick of rides at{" "}
              <span style={{ color: "#00aff5" }}>low prices.</span>
              <Text fontSize={16} fontWeight={"normal"}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </Text>
            </Text>
          </Flex>
        </Box>
        <Box flex="1" mx="auto" my="auto">
          <Image src={WorkBanner} alt="Car Banner" bg="transparent" />
        </Box>
      </Flex>

      <PicCar />

      <Box textAlign={"center"} m={5} mt={10}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          How does it work<span style={{ color: "#00aff5" }}>?</span> 
        </Text>
        <Text>
          Easily rent your fav vehicles from our list.Best prices ever compare
          to any company in town.
        </Text>
      </Box>
      {/* <Box
        m={10}
        p={10}
        backgroundImage="url('car.jpg')" 
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        //   width="100vw"
        //   height="100vh"
        position="relative"
      >
        <Center
          // position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          // color="white"
          fontSize="24px"
          fontWeight="bold"
          textAlign="center"
        >
          <Box position={["","absolute"]} top="10px" left="10px">
            <Card maxW={["33%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box position="absolute" top="10px" right="10px">
            <Card maxW={["50%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box position="absolute" bottom="10px" left="10px">
            <Card maxW={["50%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box position="absolute" bottom="10px" right="10px">
            <Card maxW={["50%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Image src={GuideCar}></Image>
        </Center>
      </Box> */}
 {/* <Box
        m={10}
        p={10}
        backgroundImage="url('car.jpg')" 
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        //   width="100vw"
        //   height="100vh"
        position="relative"
      >
        <Center
          // position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          // color="white"
          fontSize="24px"
          fontWeight="bold"
          textAlign="center"
        >
          <Box position={["absolute"]} top="10px" left="10px">
            <Card maxW={["33%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box position="absolute" top="10px" right="10px">
            <Card maxW={["50%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box position="absolute" bottom="10px" left="10px">
            <Card maxW={["50%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box position="absolute" bottom="10px" right="10px">
            <Card maxW={["50%", "sm"]}>
              <CardBody>
                <Image src={one}></Image>
                <Text fontSize={"smaller"}>Fill your details</Text>
                <Text fontWeight={"normal"} fontSize={"smaller"}>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Image src={GuideCar}></Image>
        </Center>
      </Box> */}

<Box mx={[3,10]} >
  <Image bgImage={GuideCar}></Image>
  <Flex  justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={["column","column","row"]}>
    <Box  m={5}>
      <Card maxW={"xs"}  m={4} boxShadow={"md"} _hover={{boxShadow:"lg"}}>
        <CardBody><Flex my={1}>
          <Image src={one}  mx={2}/>
          <Text fontSize="medium" fontWeight={"bold "}>Fill out your details</Text></Flex>
          <Text fontWeight="normal" fontSize="smaller">
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
      </Card>
      <Card maxW={"xs"}  m={4} boxShadow={"md" } _hover={{boxShadow:"lg"}}>
        <CardBody><Flex my={1}>
          <Image src={two}  mx={2}/>
          <Text fontSize="medium" fontWeight={"bold "}>Search for the perfect ride</Text></Flex>
          <Text fontWeight="normal" fontSize="smaller">
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
      </Card>
    
    
    </Box>

    <Box m={5}>
      <Image  src={GuideCar}boxSize={"56"}></Image>
    </Box>
   <Box m={5}>
   <Card maxW={"xs"}  m={4} boxShadow={"md"} _hover={{boxShadow:"lg"}}>
        <CardBody><Flex my={1}>
          <Image src={three}  mx={2}/>
          <Text fontSize="medium" fontWeight={"bold "}>Select the route</Text></Flex>
          <Text fontWeight="normal" fontSize="smaller">
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
      </Card>
      <Card maxW={"xs"}  m={4} boxShadow={"md"} _hover={{boxShadow:"lg"}}>
        <CardBody><Flex my={1}>
          <Image src={four}  mx={2}/>
          <Text fontSize="medium" fontWeight={"bold "}>Talk to the driver</Text></Flex>
          <Text fontWeight="normal" fontSize="smaller">
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
      </Card>
   </Box>

    
  </Flex>
 
</Box>

   






      <Box bg={"#00aff5"} color={"white"} p={5} m={10}>
        <Flex
          justifyContent={"center"}
          flexDirection={["column", "column", "row"]}
        >
          <Text m={5} fontWeight={"bold"} fontSize={"xl"}>
            Let’s go. Get a link to download the app.
          </Text>
          <Input
            width={["150", "240px", "300px"]}
            m={5}
            placeholder="Enter Your Phone Number"
            bg={"white"}
            boxShadow={"lg"}
          />
          <Button
            m={5}
            width={["24","24","40"]}
            rightIcon={<ArrowForwardIcon />}
            bg={"black"}
            color={"white"}
            _hover={{ bg: "white", color: "black" }}
            variant="outline"
          >
            Get Link
          </Button>
        </Flex>
      </Box>

      <Benefits />
    </>
  );
}

export default HowWorks;
