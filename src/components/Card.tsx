import Image from 'next/image';
import Link from 'next/link'

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Button,
    Code,
    Link as ChakraLink,
    Divider,
} from '@chakra-ui/react';

export default function Card() {
    return (
        <Box>
            <Box
                mt={2}
                maxW={'900px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'md'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                {/* <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                </Box> */}
                <Stack>
                    {/* <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Blog
                    </Text> */}
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'md'}
                        fontFamily={'body'}>
                        <Link href={{
                            pathname: '/post/[pid]/[pslug]',
                            query: { pid: 1, pslug: 'hello-world' },
                        }}> Hello World!</Link>
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={'Author'}
                        w={8}
                        h={8}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600} fontSize={12}>Achim Rolle</Text>
                        <Text color={'gray.500'} fontSize={12}>Feb 08, 2021 · 6 min read</Text>
                        {/* <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text> */}
                    </Stack>
                </Stack>
            </Box>
            {/* <Divider mt={2}/> */}
        </Box>
    );
}