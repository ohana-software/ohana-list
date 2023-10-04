'use client'
import { Center, Flex, Box } from '@chakra-ui/react'
import AddCircleIcon from './components/icons/AddCircleIcon'
import ClipboardIcon from './components/icons/ClipboardIcon'
import TaskList from './components/task/TaskList'
import Task from './models/Task'
import { createContext, useState } from 'react'

export default function Home() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTask(e: any) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    const task: Task = {
      id: tasks.length + 1,
      description: newTask,
      finished: false
    }

    setTasks(tasks => [task, ...tasks])
    setNewTask('')
  }

  return (
    <main className='container'>
        <Center
          bg='#D9D9D9' 
          h='200px'
          fontSize='40'
          fontWeight={"900"}
          letterSpacing="-2.6px"
        >
          <h1 className='title'>Ohana List</h1>
        </Center>

        <Flex 
          width='736px'
          gap='8px'
          m='0 auto'
          mt='-28px'
        >
          <Box
            as='input'
            bg='#F2F2F2'
            _placeholder={{ color: '#808080' }}
            placeholder='Adicione uma nova tarefa'
            fontSize='16'
            fontWeight={"400"}
            width='100%'
            borderRadius='8px'
            border='1px'
            borderColor='#D9D9D9'
            p='16px'
            value={newTask}
            onChange={handleNewTask}
          />
          <Flex
            as='button'
            alignItems='center'
            gap='8px'
            color='#F2F2F2'
            bg='#ECB62A'
            p="16px"
            borderRadius='8px'
            fontSize='14'
            fontWeight={"700"}
            transition='0.3s'
            _hover={{
              background: "#D16F61",
              color: "#F5F5F5",
            }}
            onClick={handleAddTask}
          >
            Criar<AddCircleIcon color='#F2F2F2' />
          </Flex>
        </Flex>

        <TaskList tasks={tasks} />
    </main>
  )
}