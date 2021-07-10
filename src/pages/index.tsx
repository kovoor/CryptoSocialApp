import useSWR from 'swr'
import Link from 'next/link'

import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem, Stack, HStack, VStack, Box, Flex,
  Center,
  Heading,
  Avatar,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import Navbar from '../components/Navbar'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import Footer from '../components/Footer'
import Card from '../components/Card'
import UserProfileSnippet from '../components/UserProfileSnippet'
import { supabase } from '../../lib/supabase'
import prisma from '../../lib/prisma'
import { NONAME } from 'dns'

const Index = () => {
  
 return (
   <div> 
     <Navbar />
     <Container>
       <HStack spacing="25px" align="start">
        <VStack mt={2}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </VStack>
         <VStack display={{ base: "none", md: "inline" }} w="20em" align="start">
           <UserProfileSnippet /> 
         </VStack>
       </HStack>
     </Container>
     
     
     <Footer />
   </div>
)
}

export default Index
