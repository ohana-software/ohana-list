"use client";
import React from 'react'
import { Box, Flex,Text, useColorModeValue } from '@chakra-ui/react';

interface props{
    count:number,
    countConcluidas:number
}

export const TaskCount: React.FC<props> = ({count, countConcluidas}) => {
    const bgCount = useColorModeValue('gray.200', 'gray.400');


    return (
            <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{base:"column",md:"row"}}
            gap="6"
            padding="90px 0 24px 0"
            w="51.112%"
        >
            <Text   
                as="span"
                display="flex"
                flexDirection={{base:"column",md:"row"}}
                gap="2"
            >
                <Text color="orange.Light" >Tarefas criadas </Text>
                <Box 
                    bg={bgCount}
                    p="2px 8px"
                    borderRadius="32px"
                >
                    {count}
                </Box>
            </Text>

            <Text 
            as="span" 
            display="flex"
            flexDirection={{base:"column",md:"row"}}
            gap="2"
            alignItems="center"
            >
                <Text color="pink.25">Concluídas</Text>
                <Box
                    bg={bgCount}
                    p="2px 8px"
                    borderRadius="32px"
                    display="flex"
                    gap="2"
                >
                    {countConcluidas}
                    <Text>de</Text>
                    {count}
                </Box>
            </Text>
        </Flex>
    );
}