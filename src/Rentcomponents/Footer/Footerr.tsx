import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import playstore from "../images/footer/playstore.png";
import appStore from "../images/footer/apple.png";
function Footerr() {
  return (
    <>
      <Box bg={"black"} color={"white"} my={10} p={[10,10,20]}>
        <Box>
          <Flex flexDirection={["column" ,"column","row"]}>
            <Box flex={1} >
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Download our mobile app ⚡️
              </Text>
              <Text>
                Get exclusive access to car rentals with our mobile app.
                Download now and experience convenience on the go.
              </Text>
            </Box>
            <Box flex={1}>
              <Flex flexDirection={["column","column","row"]}>
              <Box p={5}>
                <Flex
                  bg={"white"}
                  width={"190px"}
                  p={2}
                  borderRadius={32}
                  color={"black"}
                >
                  <Image boxSize={8} src={appStore} m={1} mt={2}></Image>

                  <Flex flexDirection={"column"}>
                    <Text>Download on the</Text>
                    <Text fontWeight={"bold"} fontSize={"xl"}>
                      App Store
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Box p={5}>
                <Flex
                  bg={"white"}
                  width={"190px"}
                  p={2}
                  borderRadius={32}
                  color={"black"}
                >
                  <Image boxSize={8} src={playstore} m={1} mt={2}></Image>

                  <Flex flexDirection={"column"}>
                    <Text>Get it now</Text>
                    <Text fontWeight={"bold"} fontSize={"xl"}>
                      Play Store
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <hr  style={{color:"gray"}}/>
        <Box>Ahmed rent</Box>
      </Box>
    </>
  );
}

export default Footerr;
