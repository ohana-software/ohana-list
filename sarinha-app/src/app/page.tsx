"use client";
import { Center, Flex, Box } from "@chakra-ui/react";
import AddCircleIcon from "./components/icons/AddCircleIcon";
import TaskList from "./components/task/TaskList";
import Task from "./models/Task";
import { useEffect, useReducer, useState } from "react";
import {
  tasksReducer,
  TasksDispatchContext,
  TasksContext,
} from "./context/TaskContext";
import { Spinner } from "@chakra-ui/react";
import Header from "./components/Header";
import Loader from "./components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    setLoading(false);
  }, [tasks]);

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
    <main className="container">
      <Header />

      <Loader loading={loading} />

      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <Flex
            w="90%"
            maxWidth="736px"
            gap="8px"
            m="0 auto"
            mt="-28px"
            display={!loading ? "flex" : "none"}
          >
            <Box
              as="input"
              bg="#F2F2F2"
              _placeholder={{ color: "#808080" }}
              placeholder="Adicione uma nova tarefa"
              fontSize="16"
              fontWeight={"400"}
              width="100%"
              borderRadius="8px"
              border="1px"
              borderColor="#D9D9D9"
              p="16px"
              value={newTask}
              onChange={handleNewTask}
            />
            <Flex
              as="button"
              alignItems="center"
              gap="8px"
              color="#F2F2F2"
              bg="#ECB62A"
              p="16px"
              borderRadius="8px"
              fontSize="14"
              fontWeight={"700"}
              transition="0.3s"
              _hover={{
                background: "#D16F61",
                color: "#F5F5F5",
              }}
              onClick={handleAddTask}
            >
              Criar
              <AddCircleIcon color="#F2F2F2" />
            </Flex>
          </Flex>
          <TaskList display={!loading ? "flex" : "none"} tasks={tasks} />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </main>
  );
}
