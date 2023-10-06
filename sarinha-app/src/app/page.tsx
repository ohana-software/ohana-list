"use client";
import { Box } from "@chakra-ui/react";

import { useEffect, useReducer, useState } from "react";
import {
  tasksReducer,
  TasksDispatchContext,
  TasksContext,
} from "./context/TaskContext";

import Header from "./components/Header";
import Loader from "./components/Loader";
import AddTask from "./components/task/AddTask";
import TaskDashboard from "./components/task/TaskDashboard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    setLoading(false);
  }, [tasks]);

  return (
    <Box as="main" bg="containerBg" minH="100vh" minW="225px" pb="100px">
      <Header />

      {loading && <Loader />}
      {!loading && (
        <TasksContext.Provider value={tasks}>
          <TasksDispatchContext.Provider value={dispatch}>
            <AddTask />
            <TaskDashboard tasks={tasks} />
          </TasksDispatchContext.Provider>
        </TasksContext.Provider>
      )}
    </Box>
  );
}
