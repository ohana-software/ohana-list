import { Box, Center, Flex } from "@chakra-ui/react";
import TaskDetail from "./TaskDetail";
import Task from "../../models/Task"
import ClipboardIcon from "../icons/ClipboardIcon";

interface Props {
  tasks: Task[]
}
export default function TaskList({ tasks }: Props) {
  const finishedTasks = tasks.filter(task => task.finished == true);
  let dashboard;
  if (tasks.length > 0) {
    dashboard = (
      <Flex
      flexDirection='column'
      gap='14px'
    >
      { tasks.map((task) =>
          <TaskDetail key={task.id} task={task}/>
        ) 
      }
    </Flex>
    )
  } else {
    dashboard = (
      <Center
      textAlign='center'
      p='64px 24px'
      fontSize='16px'
      color='#808080'
      borderRadius='8px'
      borderTop='1px'
      borderColor='#333'
    >
      <Flex
        flexDirection='column'
        alignItems='center'
        gap='16px'
      >
        <ClipboardIcon w="56px" h="56px"/>
        <Box
          as='p'
          lineHeight='22.4px'
        >
          <Box
            as='span'
            fontWeight={'700'}
          >
            Você ainda não tem tarefas cadastradas
          </Box>
          <br/>
          <Box
            as='span'
            fontWeight={'400'}
          >
            Crie tarefas e organize seus itens a fazer
          </Box>
        </Box>
      </Flex>
    </Center>
    )
  }

  return (
    <Flex
    width='736px'
    m='0 auto'
    mt='64px'
    gap='24px'
    flexDirection='column'
  >
    <Flex
      justifyContent='space-between'
      width='100%'
      fontSize='14px'
      fontWeight={"700"}
    >
      <Flex
        color='#D57B5A'
        gap='8px'
      >
        Tarefas criadas
        <Box
          p='2px 8px'
          fontSize='12px'
          borderRadius='999px'
          bg='#D9D9D9'
          color='#333'
        >
          { tasks.length }
        </Box>
      </Flex>
      <Flex
        color='#BF477E'
        gap='8px'
      >
        Concluídas
        <Box
          p='2px 8px'
          fontSize='12px'
          borderRadius='999px'
          bg='#D9D9D9'
          color='#333'
        >
          { finishedTasks.length > 0 ? `${tasks.length} de ${finishedTasks.length}` : 0 }
        </Box>
      </Flex>
    </Flex>
      {dashboard}
  </Flex>

  )
}