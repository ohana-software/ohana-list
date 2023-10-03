'use client'

import { Box, Button, Flex, Input, Text, useColorMode } from '@chakra-ui/react'
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
        <Flex align="center" h="6vh" mt="-30px" gap="8px">
          <Input
            placeholder="Adicione uma tarefa"
            bg="gray.500"
            _placeholder={{ color: 'gray.300' }}
            textColor="gray.100"
            p="1rem"
            w="35vw"
            _focus={{
              transition: '0.5s',
              border: '1px solid',
              borderColor: 'dark_pink',
            }}
            borderRadius="8px"
            zIndex="10"
          />
          <Button
            p="1rem"
            bg="yellow_button"
            borderRadius="8px"
            w="6rem"
            color="gray.100"
            fontWeight="bold"
            gap="8px"
          >
            Criar
            <Image src="/plus.svg" height={16} width={16} alt="add task icon" />
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
