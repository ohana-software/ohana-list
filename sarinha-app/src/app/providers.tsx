'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { useReducer } from 'react'
import { TasksContext, TasksDispatchContext, tasksReducer } from './context/TaskContext'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
    const [tasks, dispatch] = useReducer(
      tasksReducer,
      []
    );

  return (
    <CacheProvider>
      <ChakraProvider>
        <TasksContext.Provider value={tasks}>
          <TasksDispatchContext.Provider value={dispatch}>
        {children}
          </TasksDispatchContext.Provider>
        </TasksContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}
