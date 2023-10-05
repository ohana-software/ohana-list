"use client";
import {useColorMode,UnorderedList,Textarea,ListItem,IconButton  } from '@chakra-ui/react'
import { Trash } from './Icons';
import { useContext } from 'react'
import { CountContext } from '../Contexts/CrudContex'



const LisTask = () => {
    const {task,textInput,setTasks} =useContext(CountContext) 
    function Delete(index:number){
        setTasks(task.filter((list) => list.id !== index))
    }

    return (
        <UnorderedList>
            {task.map((list) => (
                <ListItem key={list.id}>
                    <Textarea>{list.text}</Textarea>
                    <IconButton
                    icon={<Trash />}
                    onClick={() => Delete(list.id)} 
                    aria-label='DeleteButton'/>
                    <p>{textInput}</p>
                </ListItem> 
            ))}
        </UnorderedList>
        );
    };

export default LisTask;
