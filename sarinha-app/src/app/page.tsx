'use client'
import { Center, Flex, Button, Box } from '@chakra-ui/react'
import AddCircleIcon from './components/AddCircleIcon'

export default function Home() {
  return (
    <main className='container'>
        <Center
          bg='#D9D9D9' 
          h='200px'
          fontSize='40'
          fontWeight={"900"}
          letterSpacing="-2.6px"
        >
          <h1 className='title'>Ohana List</h1>
        </Center>
        <Flex 
          width='736px'
          gap='8px'
          m='0 auto'
          mt='-28px'
        >
          <Box
            as='input'
            bg='#F2F2F2'
            _placeholder={{ color: '#808080' }}
            placeholder='Adicione uma nova tarefa'
            fontSize='16'
            fontWeight={"400"}
            width='100%'
            borderRadius='8px'
            border='1px'
            borderColor='#D9D9D9'
            p='16px'
          />
          <Flex
            as='button'
            alignItems='center'
            gap='8px'
            color='#F2F2F2'
            bg='#ECB62A'
            p="16px"
            borderRadius='8px'
            fontSize='14'
            fontWeight={"700"}
            transition='0.3s'
            _hover={{
              background: "#D16F61",
              color: "#F5F5F5",
            }}
          >
            Criar<AddCircleIcon />
          </Flex>
        </Flex>
    </main>
  )
}