// import { Box, Flex, Icon, Link } from "@chakra-ui/react";
// import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, RadioGroup } from '@chakra-ui/react'
// import React, { useState } from "react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { useDisclosure } from "@chakra-ui/react";

// const NavBar: React.FC = () => {
//   const [nav, setNavOpen] = useState(false);
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   function onOpen() {
//     setNavOpen(!nav);
//   }
//   const NavLinks = () => {
//     return (
//       <>

//           <Link mx={3}>Home</Link>
//           <Link mx={3}>About</Link>
//           <Link mx={3}>Contact </Link>

//       </>
//     );
//   };

// function SideBar() {

//   const btnRef = React.useRef()
//     return (
//       <>
//         <Button colorScheme='teal' >
//           Open
//         </Button>
//         <Drawer
//           isOpen={nav}
//           placement='right'
//           onClose={nav}
//         //   finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />
//             <DrawerHeader>Create your account</DrawerHeader>

//             <DrawerFooter>
//           hi
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </>
//     )
//   }
//   return (
//     <>
//       <Box mx={5} p={3}>
//         <Flex justifyContent={"space-between"}>
//           <Flex>Rent company</Flex>
//           <Flex hideBelow={"md"}>
//             <NavLinks />
//           </Flex>
//           <Link>Button</Link>

//           <Icon onClick={SideBar} hideFrom={"md"}>
//             <HamburgerIcon />
//           </Icon>
//         </Flex>
//       </Box>
//       {nav && <Flex flexDirection={"column"}><NavLinks /></Flex>}
//       <Box>

//       </Box>
//     </>
//   );
// };
// export default NavBar;
import {
    Text,
    Box,
    Flex,
    Link,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Icon,
    Stack,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import React, { useState } from "react";
  import { useDisclosure } from "@chakra-ui/react";
  import {MdCarRental} from "react-icons/md"
  
  
  const NavBar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const NavLinks = () => {
      return (
        <>
          {/* <Box p={3} _hover={{ bgColor: "gray.200" }} borderRadius={5} > */}
            <Link
           m={2}
           p={1}
           borderRadius={6}
           display="flex"
           alignItems="center"
           justifyContent="center"
           _hover={{ bgColor: "teal", color: "white" }}
            >
              Home
            </Link>
            <Link
             m={2}
             p={1}
             borderRadius={6}
             display="flex"
             alignItems="center"
             justifyContent="center"
             _hover={{ bgColor: "teal", color: "white" }}
            >
              About
            </Link>
            <Link
         m={2}
         p={1}
         borderRadius={6}
         display="flex"
         alignItems="center"
         justifyContent="center"
         _hover={{ bgColor: "teal", color: "white" }}
            >
              Contact
            </Link>
            <Link
        m={2}
        p={1}
        borderRadius={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bgColor: "teal", color: "white" }}
      >
        How it works
      </Link>
          {/* </Box> */}
        </>
      );
    };
  
    function SideBar() {
      onOpen();
      return null;
    }
  
    return (
      <>
        <Box  bg={"gray.100"}>
          <Flex mx={5} p={3} justifyContent={"space-between"}>
            <Flex
              fontFamily={"sans-serif"}
              m={2}
              fontSize={20}
              fontWeight={"extrabold"}
              color={"teal.600"}
            >
              Rent company
            </Flex>
            <Flex hideBelow={"md"}>
              <NavLinks />
            </Flex>
            <Flex>
              <Link m={3}>
                <Flex>
                <Stack direction="row" spacing={4} align="center">
                  <Flex alignItems="center"  >
                    <Button colorScheme="teal" color={"white"} size={"sm"} >
                    <Icon boxSize={7} as={MdCarRental}></Icon>
                    <Text  alignItems={"center"} style={{textDecoration:"none"}}>Book your</Text>
                    </Button>
                    </Flex>
                   
                </Stack>
                </Flex>
              </Link>
              <Icon
                as={HamburgerIcon}
                onClick={SideBar}
                hideFrom={"md"}
                m={3}
                boxSize={6}
              />
            </Flex>
          </Flex>
        </Box>
        <Drawer size={"xs"} isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}
            <DrawerBody>
              <Flex flexDirection={"column"} mt={5}>
                <NavLinks />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default NavBar;
  