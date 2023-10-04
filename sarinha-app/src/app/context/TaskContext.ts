import { createContext, useContext, useReducer } from 'react';
import Task from '../models/Task';

export const TasksContext = createContext<any>([]);

export const TasksDispatchContext = createContext<any>(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

type Action = {
  operation: string;
  task: Task
}
export function tasksReducer(tasks: Task[], action: any) {
  switch (action.operation) {
    case 'add': {
      return [...tasks, action.task];
    }
    case 'delete': {
      return tasks.filter(task => task.id != action.task.id);
    }
    default: {
      throw Error(`Invalid operation - ${action.operation}`);
    }
  }
}