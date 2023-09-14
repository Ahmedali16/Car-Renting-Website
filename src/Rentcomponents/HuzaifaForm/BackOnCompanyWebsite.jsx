import React, { useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import pdficon from "./icon/pdf-icon.png";
let DocumentText = " Document.pdf";
function BackOnCompanyWebsite() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>

      {isOpen && (
        <Box
          style={{
            position: "fixed",
            top: 8,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={handleOverlayClick}
        >
          <Flex flexDirection={"column"}>
            <Text
            //   textAlign={"center"}
              fontSize={"2xl"}
              fontWeight={"semi-bold"}
              m={2}
              mt={6}
            >
              Back on company website
            </Text>
            <Box
              borderRadius={20}
              maxW={"sm"}
              bg="black"
              fontSize="md"
              //   p={2}
              color="white"
              padding={"4"}
              mb={20}
              fontFamily={"serif"}
            >
              <Box m={3}>
                <Text m={1} my={5}>Download our PPM</Text>
                <Text m={1} my={7}>
                  The pdf is uniquely identified to yourself
                </Text>
                <Flex alignItems={"center"} my={8}>
                  <Image boxSize={"14"} src={pdficon}></Image>
                  <Text>
                    {" "}
                    <Text color="blue.400" mx={2}>{DocumentText}</Text>
                  </Text>
                </Flex>

<Text mt={12}>Please contact ( email ) if you have any further enquiries</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default BackOnCompanyWebsite;
