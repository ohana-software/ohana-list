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

  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
