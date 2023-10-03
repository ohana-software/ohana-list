'use client'

import { useState } from 'react'
import { Box, Button, Flex, Input, Text, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

import { Task } from '@/components/task'

export interface TaskProps {
  id: string
  title: string
  isChecked: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [inputText, setInputText] = useState('')
  const { toggleColorMode } = useColorMode()

  function handleAddTask() {
    setTasks((tasks) => [
      ...tasks,
      { title: inputText, isChecked: false, id: uuidv4() },
    ])
    setInputText('')
  }

  function handleDeleteTask(id: string) {
    const newTasksList = tasks.filter((task) => task.id !== id)
    setTasks(newTasksList)
  }

  function handleSetIsChecked(id: string) {
    const newTasksList = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        }
      }
      return task
    })

    setTasks(newTasksList)
  }

  function editTask(id: string, title: string) {
    const newTasksList = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          title,
        }
      }
      return task
    })

    setTasks(newTasksList)
  }

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
      <Flex align="center" bg="gray.600" h="80vh" flexDirection="column">
        <Flex w="40vw" align="center" flexDirection="column">
          {/* Create task section */}
          <Flex align="center" h="6vh" mt="-30px" gap="8px">
            <Input
              placeholder="Adicione uma tarefa"
              bg="gray.500"
              _placeholder={{ color: 'gray.300' }}
              textColor="gray.100"
              p="1rem"
              w="34vw"
              _focus={{
                transition: '0.5s',
                border: '1px solid',
                borderColor: 'dark_pink',
              }}
              borderRadius="8px"
              zIndex="10"
              onChange={(event) => setInputText(event.target.value)}
              value={inputText}
            />
            <Button
              p="1rem"
              bg="yellow_button"
              borderRadius="8px"
              w="6rem"
              color="gray.100"
              fontWeight="bold"
              gap="8px"
              onClick={handleAddTask}
            >
              Criar
              <Image
                src="/plus.svg"
                height={16}
                width={16}
                alt="add task icon"
              />
            </Button>
          </Flex>

          {/* Summary */}
          <Flex mt="64px" justify="space-between" w="100%">
            <Flex gap="8px" align="center">
              <Text color="light_orange">Tarefas criadas</Text>
              <Box
                bg="gray.400"
                borderRadius="999px"
                fontSize="0.75rem"
                px="10px"
                py="2px"
              >
                {tasks.length}
              </Box>
            </Flex>
            <Flex gap="8px" align="center">
              <Text color="pink">Concluídas</Text>
              <Box
                bg="gray.400"
                borderRadius="999px"
                fontSize="0.75rem"
                px="10px"
                py="2px"
              >
                {tasks.filter((task) => task.isChecked === true).length}
              </Box>
            </Flex>
          </Flex>

          <Flex
            w="40vw"
            mt="1.5rem"
            py={tasks.length === 0 ? '4rem' : ''}
            px={tasks.length === 0 ? '1.5rem' : ''}
            flexDirection="column"
            justify="center"
            align="center"
            gap="1rem"
            borderTop={tasks.length === 0 ? '1px solid' : ''}
            borderTopColor="gray.400"
          >
            {tasks.length === 0 ? (
              <>
                <Image
                  src="/clipboard.svg"
                  height={56}
                  width={56}
                  alt="Clipboard icon"
                />
                <Box>
                  <Text color="gray.300" fontWeight="bold">
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text color="gray.300">
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </Box>
              </>
            ) : (
              <>
                {tasks.map((task) => (
                  <Task
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                    handleSetIsChecked={handleSetIsChecked}
                    editTask={editTask}
                    key={task.id}
                  />
                ))}
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
