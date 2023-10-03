import { TaskProps } from '@/app/page'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface TaskComponentProps {
  task: TaskProps
  handleDeleteTask: (id: string) => void
  handleSetIsChecked: (id: string) => void
  editTask: (id: string, title: string) => void
}

export function Task({
  task,
  handleDeleteTask,
  handleSetIsChecked,
  editTask,
}: TaskComponentProps) {
  const [isOnEditMode, setIsOnEditMode] = useState(false)
  const [inputText, setInputText] = useState('')
  const inputRef = useRef<HTMLInputElement>(document.createElement('input'))

  function handleEditTask() {
    editTask(task.id, inputText)
    setIsOnEditMode(false)
    setInputText('')
  }

  function handleEditMode() {
    setIsOnEditMode((state) => !state)
    setInputText(task.title)
  }

  useEffect(() => {
    if (isOnEditMode) {
      inputRef.current.focus()
    }
  }, [isOnEditMode])

  return (
    <Flex
      align="center"
      gap="0.75rem"
      bg="gray.400"
      w="100%"
      p="1rem"
      borderRadius="8px"
    >
      <Button bg="transparent" onClick={() => handleSetIsChecked(task.id)}>
        {task.isChecked ? (
          <Image
            src="/checked.svg"
            alt="mark as task completed icon"
            height={24}
            width={24}
          />
        ) : (
          <Image
            src="/uncheck.svg"
            alt="mark as task completed icon"
            height={24}
            width={24}
          />
        )}
      </Button>
      {isOnEditMode ? (
        <Input
          minW="33vw"
          bg="gray.400"
          required
          ref={inputRef}
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
        />
      ) : (
        <Text textDecoration={task.isChecked ? 'line-through' : ''} minW="33vw">
          {task.title}
        </Text>
      )}
      <Button onClick={() => handleDeleteTask(task.id)}>
        <Image src="/trash.svg" alt="delete task icon" height={24} width={24} />
      </Button>
      {isOnEditMode ? (
        <Button color="green" onClick={handleEditTask}>
          <AiOutlineCheck />
        </Button>
      ) : (
        <Button color="yellow_button" onClick={handleEditMode}>
          <AiFillEdit />
        </Button>
      )}
    </Flex>
  )
}
