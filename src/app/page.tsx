"use client";
import { Box,Flex, useColorModeValue } from '@chakra-ui/react'
import { EmptyTask } from './components/atom/EmptyTask';
import { TaskCount } from './components/atom/TaskCount';
import LisTask from './components/atom/ListTasks';


export  const Home = ()=> {
  const bgMain = useColorModeValue('white.600', 'gray.600')
  const len = 1
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
          <TaskCount count={len} countConcluidas={0} />
            {len > 0 ?  <LisTask /> :  <EmptyTask /> 
          }
        </Flex>
      </Box>
  )
}

export default Home;