import { Flex } from "@chakra-ui/react";
import TaskDetail from "./TaskDetail";
import Task from "../../models/Task"

interface Props {
  tasks: Task[]
}
export default function TaskList({ tasks }: Props) {
  return (
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
}