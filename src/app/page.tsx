"use client";
import { Box,Flex, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react';

import { EmptyTask } from './components/atom/EmptyTask';
import { TaskCount } from './components/atom/TaskCount';

interface props{

  tasks: {
  id: number;
  checked: boolean;
  text: string;
  }[]

  count:number
  onComplete:boolean
  onCreate:(event: any,taskId: number) => void
  onDelete:(taskId: number) => void

}

export  const Home: React.FC<props> = ({count,onCreate,onComplete,onDelete}) => {
  const len = 0
  const bgMain = useColorModeValue('white.600', 'gray.600')
  return(
      <Box 
      as="main" 
      w="100vw" 
      h="80vh" 
      bg={bgMain}
      >
        <Flex 
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
        >
          <TaskCount count={0} countConcluidas={0} />
          {len > 0 ?  <Box>vai ter um tarefa aqui</Box> : <EmptyTask /> }
        </Flex>
      </Box>
  )
}

export default Home;