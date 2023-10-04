"use client";
import { Box, useColorModeValue } from '@chakra-ui/react'
import TaskPreencher from './components/atom/exemple'
import { useState } from 'react';
import { EmptyTask } from './components/atom/EmptyTask';


export default function Home() {
  const bgMain = useColorModeValue('white.600', 'gray.600')
  return(
      <Box as="main" w="100vw" h="100vh" bg={bgMain}>
        <EmptyTask />
      </Box>
  )
}
