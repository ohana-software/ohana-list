import { useTasks, useTasksDispatch } from "@/app/context/TaskContext";
import Task from "@/app/models/Task";
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import AddCircleIcon from "../icons/AddCircleIcon";
import CustomInput from "../theme/CustomInput";

export default function AddTask() {
  const [newTask, setNewTask] = useState<string>("");
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const lastId = () => {
    if (tasks.length < 1) return 0;
    return tasks.reduce((t1, t2) => (t1.id > t2.id ? t1 : t2)).id + 1;
  };

  function handleNewTask(e: any) {
    setNewTask(e.target.value);
  }
  function handleAddTask() {
    const task: Task = {
      id: lastId(),
      description: newTask.length < 1 ? "(Sem descrição)" : newTask,
      finished: false,
    };

    setNewTask("");
    dispatch({
      operation: "add",
      task: task,
    });
  }

  return (
    <Flex w="90%" maxWidth="736px" gap="8px" m="0 auto" mt="-28px">
      <CustomInput
        placeholder="Adicione uma nova tarefa"
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
