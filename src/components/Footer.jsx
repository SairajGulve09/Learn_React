import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>

    <Box bg={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
        <Stack direction={['column','row']}>
            <VStack alignItems={"stretch"} width={'full'} px={'4'}>
                <Heading size={"md"} textTransform={"uppercase"}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email here...' border={"none"} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                    <Button p={"0"} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>video hub</Heading>
                <Text>All rights received</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={"link"} colorScheme='purple'>
                    <a target={'blank'} href='https://www.youtube.com/'>YouTube</a>
                </Button>

                <Button variant={"link"} colorScheme='purple'>
                    <a target={'blank'} href='https://www.instagram.com/'>Instagram</a>
                </Button>

                <Button variant={"link"} colorScheme='purple'>
                    <a target={'blank'} href='https://www.github.com/'>GitHub</a>
                </Button>
            </VStack>
        </Stack>

    </Box>
      
    </>
  )
}

export default Footer
 