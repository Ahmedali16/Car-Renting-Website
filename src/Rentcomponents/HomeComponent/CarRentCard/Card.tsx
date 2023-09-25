import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";
import Audi from "../images/Cardimg/Audi.png";
import nissan from "../images/Cardimg/Nissan.png";
import porche from "../images/Cardimg/Porsche.png";
import Bmw from "../images/Cardimg/Bmw.png";
import BmwX from "../images/Cardimg/BmwX.png";
import porcheC from "../images/Cardimg/PorscheC.png";
import speedMeter from "../images/Cardimg/meter.png";
import gasStation from "../images/Cardimg/gas-station.png";
import gearBox from "../images/Cardimg/manual-gearbox.png";
import space from "../images/Cardimg/Icon (1).png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function CarCard() {
  return (
    <>
      <Box bg={"#F5F5F5"} mt={10}>
        <Box textAlign={"center"} mx={"auto"}>
          <Heading p={5}>Our impressive collections of car</Heading>
          <Text p={5}>
            Ranging from elegant sedans to power sport cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </Text>
        </Box>
        {/* <Box> */}
          <Flex justifyContent={"center"}>
            <Flex flexDirection={["column","column","row"]}>

            <Button
              p={5} m={5}
              borderRadius={10}
              bg="white"
              color="black"
              _hover={{ bg: "black", color: "white" }}
            >
              Popular Car
            </Button>
            <Button
              p={5} m={5}
              borderRadius={10}
              bg="white"
              color="black"
              _hover={{ bg: "black", color: "white" }}
            >
              Luxury Car
            </Button>
            {/* </Box> */}
      
            {/* <Box flex={1}> */}
            <Button
              p={5} m={5}
              borderRadius={10}
              bg="white"
              color="black"
              _hover={{ bg: "black", color: "white" }}
            >
              Family Car
            </Button>
            <Button
             p={5} m={5}
              borderRadius={10}
              bg="white"
              color="black"
              _hover={{ bg: "black", color: "white" }}
            >
              Off-road Car
            </Button>
            {/* </Box> */}
          
          </Flex>
          </Flex>
        <Box p={10}>
          <Flex justifyContent={"center"} flexDirection={["column","column","row"]}>
            <Card maxW="sm" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={Audi}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">Audi A8 L 2022</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    1200/
                    <span
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "lighter",
                      }}
                    >
                      per day
                    </span>
                  </Text>

                  <Flex
                    justifyContent={"space-between"}
                    px={"4"}
                    bg={"gray.100"}
                    p={2}
                    borderRadius={10}
                  >
                    <Box>
                      <Image
                        src={speedMeter}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>4,000</Text>
                    </Box>
                    <Box>
                      <Image src={gearBox} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>Auto</Text>
                    </Box>
                    <Box>
                      <Image src={space} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>4 Person</Text>
                    </Box>
                    <Box>
                      <Image
                        src={gasStation}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>Petrol</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={3}
                    colorScheme="black"
                    variant="outline"
                    _hover={{ bg: "black", color: "white" }}
                    borderRadius={10}
                  >
                    Button
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={nissan}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">Nissan Maxima Platinum 2022</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    1200/
                    <span
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "lighter",
                      }}
                    >
                      per day
                    </span>
                  </Text>

                  <Flex
                    justifyContent={"space-between"}
                    px={"4"}
                    bg={"gray.100"}
                    p={2}
                    borderRadius={10}
                  >
                    <Box>
                      <Image
                        src={speedMeter}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>4,000</Text>
                    </Box>
                    <Box>
                      <Image src={gearBox} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>Auto</Text>
                    </Box>
                    <Box>
                      <Image src={space} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>4 Person</Text>
                    </Box>
                    <Box>
                      <Image
                        src={gasStation}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>Petrol</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={3}
                    colorScheme="black"
                    variant="outline"
                    _hover={{ bg: "black", color: "white" }}
                    borderRadius={10}
                  >
                    Button
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={porche}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">Porsche Cayenne GTS 2022</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    1200/
                    <span
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "lighter",
                      }}
                    >
                      per day
                    </span>
                  </Text>

                  <Flex
                    justifyContent={"space-between"}
                    px={"4"}
                    bg={"gray.100"}
                    p={2}
                    borderRadius={10}
                  >
                    <Box>
                      <Image
                        src={speedMeter}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>4,000</Text>
                    </Box>
                    <Box>
                      <Image src={gearBox} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>Auto</Text>
                    </Box>
                    <Box>
                      <Image src={space} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>4 Person</Text>
                    </Box>
                    <Box>
                      <Image
                        src={gasStation}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>Petrol</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={3}
                    colorScheme="black"
                    variant="outline"
                    _hover={{ bg: "black", color: "white" }}
                    borderRadius={10}
                  >
                    Button
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
          <Flex justifyContent={"center"} flexDirection={["column","column","row"]}>
              <Card maxW="sm" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={Bmw}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">BMW M8 Coupe 2022</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    1200/
                    <span
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "lighter",
                      }}
                    >
                      per day
                    </span>
                  </Text>

                  <Flex
                    justifyContent={"space-between"}
                    px={"4"}
                    bg={"gray.100"}
                    p={2}
                    borderRadius={10}
                  >
                    <Box>
                      <Image
                        src={speedMeter}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>4,000</Text>
                    </Box>
                    <Box>
                      <Image src={gearBox} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>Auto</Text>
                    </Box>
                    <Box>
                      <Image src={space} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>4 Person</Text>
                    </Box>
                    <Box>
                      <Image
                        src={gasStation}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>Petrol</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={3}
                    colorScheme="black"
                    variant="outline"
                    _hover={{ bg: "black", color: "white" }}
                    borderRadius={10}
                  >
                    Button
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={BmwX}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">BMW M8 Coupe 2022</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    1200/
                    <span
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "lighter",
                      }}
                    >
                      per day
                    </span>
                  </Text>

                  <Flex
                    justifyContent={"space-between"}
                    px={"4"}
                    bg={"gray.100"}
                    p={2}
                    borderRadius={10}
                  >
                    <Box>
                      <Image
                        src={speedMeter}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>4,000</Text>
                    </Box>
                    <Box>
                      <Image src={gearBox} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>Auto</Text>
                    </Box>
                    <Box>
                      <Image src={space} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>4 Person</Text>
                    </Box>
                    <Box>
                      <Image
                        src={gasStation}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>Petrol</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={3}
                    colorScheme="black"
                    variant="outline"
                    _hover={{ bg: "black", color: "white" }}
                    borderRadius={10}
                  >
                    Button
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={porcheC}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">Porsche Cayenne GTS 2022</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    1200/
                    <span
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "lighter",
                      }}
                    >
                      per day
                    </span>
                  </Text>

                  <Flex
                    justifyContent={"space-between"}
                    px={"4"}
                    bg={"gray.100"}
                    p={2}
                    borderRadius={10}
                  >
                    <Box>
                      <Image
                        src={speedMeter}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>4,000</Text>
                    </Box>
                    <Box>
                      <Image src={gearBox} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>Auto</Text>
                    </Box>
                    <Box>
                      <Image src={space} h={"16.67px"} w={"16.67px"}></Image>
                      <Text fontSize={"14px"}>4 Person</Text>
                    </Box>
                    <Box>
                      <Image
                        src={gasStation}
                        h={"16.67px"}
                        w={"16.67px"}
                      ></Image>
                      <Text fontSize={"14px"}>Petrol</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={3}
                    colorScheme="black"
                    variant="outline"
                    _hover={{ bg: "black", color: "white" }}
                    borderRadius={10}
                  >
                    Button
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Box>
        <Flex justifyContent={"center"}>
        <Button  rightIcon={<ArrowForwardIcon />} bg={"black"} color={"white"} variant='solid' m={2} mb={5}>
    Call us
  </Button>
        </Flex>
      </Box>
    </>
  );
}

export default CarCard;
