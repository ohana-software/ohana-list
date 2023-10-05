"use client";
import React, {useContext, useState} from 'react'
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
            flexDirection="row"
            textAlign="center"
            gap="6"
            padding="90px 0 24px 0"
            w="51.112%"
        >
            <Text   as="span"
                    display="flex"
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

            <Text as="span" 
            display="flex"
            gap="2"
            >
                <Text color="pink.25">Concluídas</Text>
                <Box
                    bg={bgCount}
                    p="2px 8px"
                    borderRadius="32px"
                >
                    {countConcluidas}
                </Box>
            </Text>
        </Flex>
    );
}