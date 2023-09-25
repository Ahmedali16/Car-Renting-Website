import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdCarRental } from "react-icons/md";
import BookingDone from "./BookingDone";
function BookYourPopUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CarValues = [
    "Honda city",
    "Toyota Parado",
    "Toyota Land Cruiser",
    "Honda Civic",
    "Suzuki cultus",
    "Suzuki Wgonar",
    "Kia Sportage",
    "Hyundai Tucson",
    "Other car",
  ];
  const DaysValues = ["1 Day" ,"2 to 3 Days","7 Days","2 weeks", "3 weeks" ,"1 month" ,"other"]

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" color={"white"} size={"sm"}>
        <Icon boxSize={7} as={MdCarRental}></Icon>
        <Text alignItems={"center"} style={{ textDecoration: "none" }}>
          Book your
        </Text>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>Book Your Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Your name</FormLabel>
              <Input ref={initialRef} placeholder="Enter your name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contact Number</FormLabel>
              <Input placeholder="Enter your contact number" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select car</FormLabel>
              <Select placeholder="Select option">
                {CarValues.map((car, index) => (
                  <option key={index} value={car}>
                    {car}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Time Duration</FormLabel>
              <Select placeholder="Select option">
                {DaysValues.map((days,index)=>(
                    <option key={index} value={days}>{days}</option>
                ))}
                <option value="option1">1 Day</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
             <BookingDone/>
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BookYourPopUp;
