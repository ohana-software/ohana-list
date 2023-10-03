'use client'

import { Box, Flex, Input, Text, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      {/* Header */}
      <Flex
        as="header"
        h="20vh"
        bgColor="gray.700"
        justify="center"
        align="center"
        position="relative"
      >
        <Text
          fontWeight="bold"
          bgGradient="linear(to-r, yellow_button, light_orange, dark_pink)"
          bgClip="text"
          fontSize="2.5rem"
          letterSpacing="-2px"
        >
          Ohana List
        </Text>

        <Box
          position="absolute"
          right={30}
          top={30}
          onClick={toggleColorMode}
          cursor="pointer"
        >
          <Image
            src="/color-mode.svg"
            alt="Color mode toggle button"
            height={35}
            width={35}
          />
        </Box>
      </Flex>

      {/* Body */}
      <Flex justify="center" bg="gray.600" h="80vh">
        <Flex>
          <Input
            placeholder="Adicione uma tarefa"
            bg="gray.500"
            h="6vh"
            _placeholder={{ color: 'gray.300' }}
            textColor="gray.100"
            p="0.8rem"
            w="35vw"
            _focus={{
              transition: '0.5s',
              border: '1px solid',
              borderColor: 'dark_pink',
            }}
            borderRadius="8px"
            mt="-30px"
            zIndex="10"
          />
        </Flex>
      </Flex>
    </>
  )
}
