import React from 'react'
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

  import speedMeter from "../images/Cardimg/meter.png";
  import gasStation from "../images/Cardimg/gas-station.png";
  import gearBox from "../images/Cardimg/manual-gearbox.png";
  import space from "../images/Cardimg/Icon (1).png";
  import { ArrowForwardIcon } from "@chakra-ui/icons";

  interface CarCardProps{
    CardImage : string;
    CardHeading : string;
    CardText: string;
  }

const CarCard=({CardImage, CardHeading, CardText}:CarCardProps)=> {
  return (
    <>
     <Box p={10}>
          <Flex justifyContent={"center"} flexDirection={["column","column","row"]}>
            <Card maxW="xs" m={5} _hover={{ boxShadow:"lg" }} boxShadow={"md"} mx={"auto"}>
              <CardBody>
                <Image
                  src={CardImage}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="2" spacing="2">
                  <Heading size="xs">{CardHeading}</Heading>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    {CardText}
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
    </>
  )
}

export default CarCard