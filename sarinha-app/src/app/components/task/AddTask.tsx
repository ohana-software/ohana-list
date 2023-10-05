import { useTasks, useTasksDispatch } from "@/app/context/TaskContext";
import Task from "@/app/models/Task";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useState, useReducer, useEffect } from "react";
import AddCircleIcon from "../icons/AddCircleIcon";

interface Props {
  display: string;
}
export default function AddTask({ display }: Props) {
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState<string>("");
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  function handleNewTask(e: any) {
    setNewTask(e.target.value);
  }

  const lastId = () => {
    if (tasks.length < 1) return 0;
    return tasks.reduce((t1, t2) => (t1.id > t2.id ? t1 : t2)).id + 1;
  };

  function handleAddTask() {
    const task: Task = {
      id: lastId(),
      description: newTask,
      finished: false,
    };

    setNewTask("");
    dispatch({
      operation: "add",
      task: task,
    });
  }
  return (
    <Flex
      w="90%"
      maxWidth="736px"
      gap="8px"
      m="0 auto"
      mt="-28px"
      display={display}
    >
      <Box
        as="input"
        bg="addTask.bg"
        _placeholder={{ color: "base.gray.300" }}
        placeholder="Adicione uma nova tarefa"
        fontSize="16"
        fontWeight="regular"
        width="100%"
        borderRadius="8px"
        border="1px"
        borderColor="addTask.border"
        _focus={{ outline: "none", borderColor: "product.dark-pink" }}
        p="16px"
        value={newTask}
        onChange={handleNewTask}
      />

      <Flex>
        <Button h="100%" onClick={handleAddTask}>
          Criar
          <AddCircleIcon w="16px" h="16px" />
        </Button>
      </Flex>
    </Flex>
  );
}
