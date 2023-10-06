import { Box, Flex } from "@chakra-ui/react";
import Task from "../../models/Task";
import TaskList from "./TaskList";

interface Props {
  tasks: Task[];
}
export default function TaskDashboard({ tasks }: Props) {
  const finishedTasks = tasks.filter((task) => task.finished == true);

  return (
    <Flex
      w="90%"
      maxWidth="736px"
      m="0 auto"
      mt="64px"
      gap="24px"
      flexDirection="column"
    >
      <Flex
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={{ base: "center", sm: "space-between" }}
        gap={{ base: "10px", sm: undefined }}
        width="100%"
        fontSize="sm"
        fontWeight="bold"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Flex color="product.light-orange" gap="8px">
          Tarefas criadas
          <Box
            p="2px 8px"
            fontSize="xs"
            borderRadius="999px"
            bg="taskLength.bg"
            color="taskLength.color"
          >
            {tasks.length}
          </Box>
        </Flex>
        <Flex color="product.pink" gap="8px">
          Concluídas
          <Box
            p="2px 8px"
            fontSize="xs"
            borderRadius="999px"
            bg="taskLength.bg"
            color="taskLength.color"
          >
            {finishedTasks.length > 0
              ? `${finishedTasks.length} de ${tasks.length}`
              : 0}
          </Box>
        </Flex>
      </Flex>
      <TaskList tasks={tasks} />
    </Flex>
  );
}
