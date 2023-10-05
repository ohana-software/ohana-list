"use client";
import {useColorMode,UnorderedList,Textarea,ListItem,IconButton  } from '@chakra-ui/react'
import { Edit, Trash } from './Icons';
import { useContext, useState } from 'react'
import { CountContext } from '../Contexts/CrudContex'



const LisTask = () => {
    const {task,setTasks} =useContext(CountContext) 
    const { colorMode } = useColorMode()
    const [edit,setEdits] = useState(true)

    function Delete(index:number){
        setTasks(task.filter((list) => list.id !== index))
    }

    function EditTask(){
        if(edit == true){
            setEdits(false)
        }
        else{
            setEdits(true)
        }
    }
    

    return (
        <UnorderedList>
            {task.map((list) => (
                <ListItem key={list.id}>
                    <Textarea
                    isReadOnly={edit}
                    >
                        {list.text}
                    </Textarea>
                    <IconButton
                    icon={<Trash />}
                    onClick={() => Delete(list.id)} 
                    aria-label='DeleteButton'/>
                    <IconButton
                    icon={<Edit />}
                    onClick={EditTask} 
                    aria-label='EditButton'/>
                </ListItem> 
            ))}
        </UnorderedList>
        );
    };

export default LisTask;
