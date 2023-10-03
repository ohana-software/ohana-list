"use client";
import { Box, useColorModeValue } from "@chakra-ui/react"

export const  StyleColorMode= ()=> {

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <>
      <Box mb={4} bg={bg} color={color}>
        This box s style will change based on the color mode.
      </Box>
    </>
  )
}