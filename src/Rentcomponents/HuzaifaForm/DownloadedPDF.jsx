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
            Download pdf
            </Text>
            <Box
              maxW={"xs"}
            
              fontSize="md"
            border={"1px solid gray"}
              padding={"4"}
              mb={20}
              fontFamily={"serif"}
            >
              <Box m={3}>
                
                <Flex alignItems={"center"} my={3}>
                  <Image boxSize={"14"} src={pdficon}></Image>
                  <Text>
                    {" "}
                    <Text color="blue.400" mx={2}>{DocumentText}</Text>
                  </Text>
                </Flex>

<Text   mt={8}>PDF has unique code for each user 
(starting at 001, next 002, etc etc</Text>
<Text mt={3}>Unique code is on file name, and 
also watermarked in the document</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default BackOnCompanyWebsite;
