import { Box,Heading,IconButton,Input,Button,Flex } from '@chakra-ui/react'
import { Moon } from '../atom/Icons'
import { SearchBar } from '../atom/SearchBar'

export default function Header() {
    return(
        <Box as="header"
        w="100vw"
        h="18.183vh"
        bg="gray.200"
        textAlign="center"
        verticalAlign="middle"
        display="table-cell"
        >
            <IconButton 
                colorScheme="transparent"
                aria-label='botão mudar tema'
                icon={<Moon />}
                position="absolute"
                right="0"
                top="0"
                margin={{base:"20px 18px 0 0",md:"36px 22px 0 0", lg:"41px 36px 0 0"}}
                w={{base:"5vh",md:"35px",lg:"35px"}} 
            />
            <Heading
                fontFamily="Inter,sans-serif"
                bgGradient='linear(to right, #E9C347 42%, #D16F61 50%, #B32694 62%)'
                bgClip='text'
                fontSize={{ base: "24px", md: "36px", lg: "40px" }}
                fontWeight='black'
                w="100vw"
            >
                Ohana List
            </Heading>
            <SearchBar />
        </Box>
    )
}