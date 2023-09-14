import { Box, Button, Checkbox, Flex, Heading, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import twittericon from "../images/footer/twittericon.png"
import { EmailIcon, InfoOutlineIcon, PhoneIcon } from '@chakra-ui/icons'

function ContactPage() {
  return (
    <>
    <Box mt={[32,32,20]} >
     <Box textAlign={"center"}>
<Heading>Contact us</Heading>
<Text >Any question or remarks? Just write us a message!</Text>

     </Box>
    
    <Flex mt={2}  flexDirection={["column-reverse","column-reverse","column-reverse","row"]} justifyContent={"center"}>
      <Box  bgColor={"black"} color={"white"}  p={[4,6,7]} borderRadius={10}>
      <Flex flexDirection={"column"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} py={3}>
          Contact Information
          </Text>
          <Text>
          Say something to start a live chat!
          </Text>
          <Flex mt={10}  alignItems={"center"}> 
          <Icon as={PhoneIcon}></Icon>
          <Text mx={2}>+923480170928</Text>
          </Flex>
          <Flex mt={4}  alignItems={"center"}> 
          <Icon as={EmailIcon}></Icon>
          <Text mx={2}>miangali927@gmail.com</Text>
          </Flex>
          <Flex mt={4}  alignItems={"center"}> 
          <Icon as={InfoOutlineIcon}></Icon>
          <Text mx={2}>Fateh garh , Harbanspura Lahore , Pakistan</Text>
          </Flex>
          <Image mt={"28"} h={10} w={10} src={twittericon} />
      </Flex>
      </Box>
     <Box   >
     <Flex p={10} flexDirection={"column"}  boxShadow={'lg'}>
          <Flex mt={2}   flexDirection={["column","column","row"]}>
            
         
          <Flex p={2}  mt={4} flexDirection={"column"}>
              <Text fontSize={"sm"}>First Name</Text>
          <Input p={2}  boxShadow={"lg"} w={["auto","auto","xs"]} variant='flushed' placeholder='e.g: Ahmed' />
          </Flex>
          <Flex p={2}  mt={4} flexDirection={"column"}>
              <Text fontSize={"sm"}>Last Name</Text>
          <Input  p={2} boxShadow={"lg"} w={["auto","auto","xs"]} variant='flushed' placeholder='e.g: ali' />
          </Flex>
          </Flex>
          <Flex  my={2} flexDirection={["column","column","row"]}>
            <Flex p={2}  mt={4} flexDirection={"column"}>
              <Text fontSize={"sm"}>Email</Text>
          <Input  p={2} boxShadow={"lg"} w={["auto","auto","xs"]}variant='flushed' placeholder='e.g: ahmed@gmail.com' />
          </Flex>
          <Flex p={2}  mt={4} flexDirection={"column"}>
              <Text fontSize={"sm"}>Phone no</Text>
          <Input p={2}  boxShadow={"lg"} w={["auto","auto","xs"]} variant='flushed' placeholder='e.g: 030000000' />
          </Flex>
          </Flex>
          <Box mt={5}><Text fontWeight={"bold"} >Select Time Period</Text>
          <Flex flexDirection={["column","column","row"]}>
            <Flex>  <Checkbox  mt={4} mx={2} defaultChecked>For a day</Checkbox>
            <Checkbox mx={2} mt={4}>For a week</Checkbox></Flex>
            <Flex>  <Checkbox mx={2} mt={4}>For a month</Checkbox>
            <Checkbox mx={2} mt={4}>other</Checkbox></Flex>
          </Flex>
          </Box>
          
          <Box my={[6,3]}> <Text fontSize={"sm"} >Message</Text><Textarea id='text' placeholder='Enter your text here'></Textarea></Box>
          <Box><Button bg={"black"} color={"white"} _hover={{bg:"gray" , color:"black"}}>Send </Button></Box>
      </Flex>
     </Box>
    </Flex>
<Flex  justifyContent={"center"} m={5} >

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.240821845229!2d74.401817274527!3d31.57244329456949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905556f40f311%3A0xc3bc6369c81a44e3!2sFateh%20Garh%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694692399158!5m2!1sen!2s" width="70%" height="400px"   loading="lazy" ></iframe>
</Flex>


    </Box>
    </>
  )
}

export default ContactPage