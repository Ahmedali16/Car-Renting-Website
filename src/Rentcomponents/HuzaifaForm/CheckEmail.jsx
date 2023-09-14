import {React,useState} from 'react'
import { Box, Button, Flex, Text } from "@chakra-ui/react";
function CheckEmail() {
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
        maxW={"md"}
        bg={"black"}
            fontSize="2xl"  p={2} color="white"
            padding={5}
        
        >
                 <Box  >
       <Text   textAlign={"center"} my={0} p={8}>Please check your Email for a registration link to the document </Text>
   <Flex textAlign={"center"} p={["1","1","4"]} flexDirection={"column"}>
   <Text >Trouble with getting the email</Text>
      <Text>Please contact shakir@gmail.com</Text>
   </Flex>
     </Box>
      
        </Box>
      </Box>
    )}
  </>
  )
}

export default CheckEmail