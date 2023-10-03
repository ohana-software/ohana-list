import { TaskProps } from '@/app/page'
import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface TaskComponentProps {
  task: TaskProps
  handleDeleteTask: (id: string) => void
  handleSetIsChecked: (id: string) => void
}

export function Task({
  task,
  handleDeleteTask,
  handleSetIsChecked,
}: TaskComponentProps) {
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
      <Text textDecoration={task.isChecked ? 'line-through' : ''} minW="35vw">
        {task.title}
      </Text>
      <Button onClick={() => handleDeleteTask(task.id)}>
        <Image src="/trash.svg" alt="delete task icon" height={24} width={24} />
      </Button>
    </Flex>
  )
}
