'use client'

import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  const { toggleColorMode } = useColorMode()

  return (
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
  )
}
