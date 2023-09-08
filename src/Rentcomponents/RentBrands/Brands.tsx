import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import tesla from '../images/logo/T.png'; 
import honda from  "../images/logo/Honda svg.png"
import toyota from  "../images/logo/toyota.png"
import hyundai from  "../images/logo/hyundai.png"
import nissan from  "../images/logo/Nissan USA svg.png"
import kia from  "../images/logo/Kia svg.png"
import volswagan from  "../images/logo/Volkswagen USA svg.png"
import audi from  "../images/logo/Audi svg.png"


function Brands() {
  return (
    <>
     
      <Box mx={20} mt={"20"}>
        <Flex justifyContent={"space-between"} >
          <Text fontWeight={700}>Rent by Brands</Text>
          <Link fontWeight={700} >view all <span style={{fontWeight:"700" }}><ArrowForwardIcon/></span></Link>
        </Flex>
        <Flex flexDirection={"column"}>
        <Flex justifyContent={"center"} flexDirection={["column","column","row"]} alignItems={"center"} mt={5}>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={tesla} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Tesla</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={honda} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Honda</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={toyota} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Toyota</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={nissan} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Nissan</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={hyundai} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Hyundai</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={kia} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Kia</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={audi} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> Audi</Text>
</Box>
<Box bg={"gray.200"} p={7} m={2} height={"28"} width={"32"} borderRadius={8}>
    <Image src={volswagan} height={"10"} width={"10"}></Image>
    <Text textAlign={"center"}> VolsWagn</Text>
</Box>

        </Flex>
        </Flex>
      </Box>
     
    </>
  );
}

export default Brands;
// import { ArrowForwardIcon } from "@chakra-ui/icons";
// import { Box, Flex, Image, Link, Text, Collapse } from "@chakra-ui/react";
// import React, { useState } from "react";
// import tesla from '../images/logo/T.png'; 
// import honda from  "../images/logo/Honda svg.png";
// import toyota from  "../images/logo/toyota.png";
// import hyundai from  "../images/logo/hyundai.png";
// import nissan from  "../images/logo/Nissan USA svg.png";
// import kia from  "../images/logo/Kia svg.png";
// import volkswagen from  "../images/logo/Volkswagen USA svg.png";
// import audi from  "../images/logo/Audi svg.png";

// function Brands() {
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsAccordionOpen(!isAccordionOpen);
//   };

//   return (
//     <Box mx={20} mt={"20"}>
//       <Flex justifyContent={"space-between"}>
//         <Text fontWeight={700}>Rent by Brands</Text>
//         <Link fontWeight={700} onClick={toggleAccordion}>
//           {isAccordionOpen ? "Hide" : "View all"}{" "}
//           <span style={{ fontWeight: "700" }}>
//             <ArrowForwardIcon transform={isAccordionOpen ? "rotate(90deg)" : ""} />
//           </span>
//         </Link>
//       </Flex>
//       <Flex flexDirection={"column"}>
//         <Collapse in={isAccordionOpen}>
//           <Flex justifyContent={"center"} flexWrap="wrap" mt={5}>
//             {/* Map over your brand data and render each brand box */}
//             {[
//               { src: tesla, name: "Tesla" },
//               { src: honda, name: "Honda" },
//               { src: toyota, name: "Toyota" },
//               { src: nissan, name: "Nissan" },
//               { src: hyundai, name: "Hyundai" },
//               { src: kia, name: "Kia" },
//               { src: audi, name: "Audi" },
//               { src: volkswagen, name: "Volkswagen" },
//             ].map((brand, index) => (
//               <Box
//                 key={index}
//                 bg={"gray.200"}
//                 p={7}
//                 m={2}
//                 height={"auto"}
//                 width={["100%", "33%", "25%", "calc(25% - 32px)"]}
//                 maxWidth={["250px", "250px", "250px", "250px"]}
//                 borderRadius={8}
//               >
//                 <Image src={brand.src} height={"10"} width={"10"} />
//                 <Text textAlign={"center"}>{brand.name}</Text>
//               </Box>
//             ))}
//           </Flex>
//         </Collapse>
//       </Flex>
//     </Box>
//   );
// }

// export default Brands;


// export default Brands;










