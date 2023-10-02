import { Box,Heading,IconButton,Input,Button,Flex } from '@chakra-ui/react'
import { SearchBar } from '../atom/SearchBar'
import { BtnTheme } from '../atom/ThemeBtn'
import { Plus } from '../atom/Icons'

export default function Header() {
    return(
        <Box as="header"
        w="100vw"
        h="18.183vh"
        bg="gray.200"
        textAlign="center"
        verticalAlign="middle"
        display="table-cell"
        position="relative"
        >
            <BtnTheme />
            <Heading
            bgGradient='linear(to right, #E9C347 42%, #D16F61 50%, #B32694 62%)'
            bgClip='text'
            fontSize={{ base: "24px", md: "42px", lg: "48px" }}
            fontWeight='extrabold'
            w="100vw"
            >
                Ohana List
            </Heading>
            <SearchBar />
        </Box>
    )
}