import Navbar from '../../../components/Navbar'
import Link from 'next/link'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Center,
    Input,
    Heading,
    Alert,
    Link as ChakraLink,
    ListItem, HStack, VStack,
} from '@chakra-ui/react';

import {
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"


import { Container } from '../../../components/Container'

const Post = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Box
                    mt={2}
                    maxW={'900px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'md'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Alert status="warning" display={{ base: "none", md: "flex" }}>
                        <AlertIcon />
                        Seems you&apos;re not logged in.&nbsp; <ChakraLink color="teal.500" as="u" href="/login"> Log in now </ChakraLink> &nbsp;to reply, create, and save posts.
                    </Alert>
                    <Heading as="h1" size="lg" mt={8}>Hello World</Heading>
                    <Text mt={4}>
                        I&apos;m a django beginner so I&apos;m trying to understand the concept of context and context processor.

                        What is a context and why do you use it?
                        Is a context a value you need to have available in order to use in a template?
                        Is a context and a context processor the same?
                        I&apos;ll apreciate a lot your response. Thanks in advance!
                    </Text>
                </Box>
            </Container>
        </div>
    )
}

export default Post;