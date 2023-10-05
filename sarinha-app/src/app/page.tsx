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
import AddTask from "./components/task/AddTask";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    setLoading(false);
  }, [tasks]);

  return (
    <Box as="main" bg="containerBg" className="container">
      <Header />

      <Loader loading={loading} />

      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <AddTask display={!loading ? "flex" : "none"} />
          <TaskList display={!loading ? "flex" : "none"} tasks={tasks} />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </Box>
  );
}
