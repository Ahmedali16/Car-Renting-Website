
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function OTPcode() {
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
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={handleOverlayClick}
        >
          <Box
          borderRadius={"20"}
          maxW={"lg"}
          bg={"black"}
              fontSize="sm" fontFamily="monospace" mx="auto"  p={2} color="gray.300"
              padding={5}
          
          >
                   <Box  >
         <Text mt={2}>By entering the information and clicking on the "Accept" button below, you confirm that (i) you are not a resident of and/or domiciled in the United States of America, (ii) you are not a US person, and (iii) you will not transmit or otherwise send any information contained in the following document to any person located in the United States of America.</Text>
        <Text mt={2}>By entering the information and clicking on the "Accept" button below, you confirm that (i) you are not a resident of and/or domiciled in the United States of America, (ii) you are not a US person, and (iii) you will not transmit or otherwise send any information contained in the following document to any person located in the United States of America.</Text>
       </Box>
        
          </Box>
        </Box>
      )}
    </>
  );
}

export default OTPcode;
