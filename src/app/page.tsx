"use client";
import { Box,Flex, useColorModeValue } from '@chakra-ui/react'
import { EmptyTask } from './components/atom/EmptyTask';
import { TaskCount } from './components/atom/TaskCount';
import LisTask from './components/atom/ListTasks';
import { useContext, useState } from 'react';
import { CountContext } from './components/Contexts/CrudContex';


const Home = ()=> {
  const bgMain = useColorModeValue('white.600', 'gray.600')
  const { task,isChecked } = useContext(CountContext)
  const len = task.length

  const completedTasks = task.filter((list, index) => isChecked[index]);

const completedTasksCount = completedTasks.length;

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
          <TaskCount count={len} countConcluidas={completedTasksCount} />
            {len > 0 ?  <LisTask /> :  <EmptyTask /> 
          }
        </Flex>
      </Box>
  )
}

export default Home;