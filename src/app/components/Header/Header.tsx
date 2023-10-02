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
            <Heading>
                Ohana List
            </Heading>
            <SearchBar />
        </Box>
    )
}