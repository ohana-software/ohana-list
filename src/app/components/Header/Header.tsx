import { Box,Heading } from '@chakra-ui/react'
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
            <Heading
                bgGradient='linear(to right, #E9C347 42%, #D16F61 50%, #B32694 62%)'
                bgClip='text'
                fontSize={{ base: "24px", md: "42px", lg: "48px" }}
                fontWeight='extrabold'
                w="100vw"
                
            >
                Ohana List
            </Heading>
        </Box>
    )
}