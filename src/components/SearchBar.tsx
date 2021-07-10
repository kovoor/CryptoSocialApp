
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
} from '@chakra-ui/react';
import {
    SearchIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';


export default function SearchBar() {
    return (
        <Box>
        <Stack spacing={0} display={{ base: "none", md: "inline" }}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input variant="filled" placeholder="Search for questions, topics, categories" />
            </InputGroup>
        </Stack>
        <SearchBarMobile />
        </Box >
    )
}

const SearchBarMobile = () => {
    return(
    <IconButton aria-label="Search database" icon={<SearchIcon />} display={{ md: "none" }} mr={4}/>
    )
}
