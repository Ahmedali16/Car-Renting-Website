// import React, { useState } from 'react';
// import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import { Link } from 'react-router-dom';

// function CheckEmail() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <>
//       <Button onClick={openModal}>Open Modal</Button>

//       {isOpen && (
//         <Box >
       
//         <Box
//           style={{
//             position: "fixed",
//             top: 10,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             // backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//           onClick={handleOverlayClick}

//         > 
//         <Flex flexDirection={"column"}>
//         <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"semi-bold"} m={2}>Email received by user</Text>
//           <Box
//             borderRadius={20} 
//             maxW={"lg"}
//             bg="black"
//             fontSize="lg"
//             p={2}
//             color="white"
//             padding={"4"}
//             // fontFamily={"sans-serif"}
//           >
//             <Box m={8}>
//               <Text  my={8} fontSize="xl " p={2} mt={12}>Dear ( Registered Name)  </Text>
//               <Text  m={1}>Thank you for registration your interest in </Text>
//               <Text m={1}>( COMPANY NAME ),</Text>
//               <Text my={8} mx={1}>Below is the link to download your uniqely identified company PPM:</Text>
//               <Text textColor={"skyblue"} mx={1}> Click here to download</Text>
//               <Text mx={1} mt={"28"}>Thank you and kind regards,</Text>
//               <Box  bg={"white"} color={"black"} 
//               p={4} my={4}>
//                 <Text fontWeight={"bold"} >Company Signature</Text>
            
//               </Box>
//             </Box>
//           </Box>
//           </Flex>
//         </Box>
//         </Box>
//       )}
//     </>
//   );
// }

// export default CheckEmail;

import React, { useState } from 'react';
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

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
            position:"fixed",
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
            <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"semi-bold"} m={2} mt={6}>Email received by user</Text>
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
              <Box m={4}>
                <Text my={6} fontSize="lg " p={2} mt={12}>Dear ( Registered Name)  </Text>
                <Text m={1}>Thank you for registering your interest in </Text>
                <Text m={1} fontSize="lg ">( COMPANY NAME ),</Text>
                <Text my={8} mx={1}>Below is the link to download your uniquely identified company PPM:</Text>
                <Text textColor={"blue.400"} mx={1}> Click here to download</Text>

                <Text mx={1} mt={"20"}>Thank you and kind regards,</Text>
                <Box  bg={"white"} color={"black"} p={4} my={4}>
                  <Text >Company Signature</Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default CheckEmail;
