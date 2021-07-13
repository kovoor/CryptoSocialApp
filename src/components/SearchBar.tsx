
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
InputGroup,
InputLeftElement,
InputRightElement,
    Input,
    Kbd,
} from '@chakra-ui/react';
import {
    SearchIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';


export default function SearchBar() {
    return (
        <Flex w="full">
            <Stack w="full" display={{ base: "none", md: "flex" }} mr={8}>
                <InputGroup >
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                    <Input variant="filled" placeholder="Search for questions, topics, categories" />
                    <InputRightElement opacity={0.5} width="4.5rem">
                        <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
                    </InputRightElement>
                </InputGroup>
            </Stack>
            <SearchBarMobile />
        </Flex>
    )
}

const SearchBarMobile = () => {
    return(
    <IconButton aria-label="Search database" icon={<SearchIcon />} display={{ md: "none" }} mr={4}/>
    )
}
