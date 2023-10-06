import { createContext, useContext, useReducer } from "react";
import Task from "../models/Task";

export const TasksContext = createContext<Task[]>([]);

export const TasksDispatchContext = createContext<any>(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

type Action = {
  operation: string;
  task: Task;
  ids: number[];
};
export function tasksReducer(tasks: Task[], action: any) {
  switch (action.operation) {
    case "add": {
      return [...tasks, action.task];
    }
    case "delete": {
      return tasks.filter((task) => task.id != action.task.id);
    }
    case "deleteMultiple": {
      return tasks.filter((task) => !action.ids.includes(task.id));
    }
    case "updateStatus": {
      let updatedTasks = tasks;
      updatedTasks = updatedTasks.filter((t) => t.id != action.task.id);
      if (action.task.finished) {
        updatedTasks.push(action.task);
      } else {
        updatedTasks.unshift(action.task);
      }

      return updatedTasks;
    }
    case "update": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    default: {
      throw Error(`Invalid operation - ${action.operation}`);
    }
  }
}
