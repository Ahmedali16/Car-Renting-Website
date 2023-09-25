import { CheckIcon } from '@chakra-ui/icons'
import { Button, Flex, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'


  function BookingDone() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} colorScheme="blue" mr={3}>
              Book 
            </Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
                <Flex justifyContent={"center"} alignItems={"center"} mx={4}> 
                    <Icon as={CheckIcon} color={"green"} fontSize={34} mx={2}></Icon>
              <Text fontSize={34}>Thankyou</Text>
              </Flex>
              <Text textAlign={"center"}>We contact you soon</Text>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default BookingDone