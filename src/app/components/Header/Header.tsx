"use client";
import { Box,Heading,IconButton,Input,Button,Flex, useColorModeValue } from '@chakra-ui/react'
import { SearchBar } from '../atom/SearchBar'
import { BtnTheme } from '../atom/ThemeBtn'

export default function Header() {
    const bgHeader = useColorModeValue('gray.200', 'gray.700')
    return(
        <Box as="header"
        w="100vw"
        h="20vh"
        bg={bgHeader}
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