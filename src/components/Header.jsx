import React from 'react'

//this import is taken directly from the chakra ui website from the components section and in that we have selected drawer
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import {BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
      <Button
            zIndex={'overlay'}

      pos={"fixed"}
      top={"4"}
      left={"4"}
      colorScheme='purple'
      p={"0"}
      w={"10"}
      h={"10"}
      borderRadius={"full"}
      onClick={onOpen}>
        
        <BiMenuAltLeft size={"20"}/>
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                {/* stack is a div whos display is already flex and vstack means stack with a flex direction column i.e vertical*/}
                {/* and align items are by default centre */}
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Home</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/upload'}>upload video</Link>
                    </Button>
                </VStack>

                <HStack
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}>
                    <Button onClick={onClose} colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>

                    <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default Header
