import React, { createContext, useEffect, useState } from "react";

type Todo = {
    id: number;
    text: string;
};

// Defina as props do componente
type TodoListProps = {

    //Tasks Props
    task:Todo[]; // Um array de objetos do tipo Todo
    textInput: string
    setTextInput: React.Dispatch<React.SetStateAction<string>>
    setTasks: React.Dispatch<React.SetStateAction<{
        id: number;
        text: string;
    }[]>>

    //Contador Props
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>

    // Tarefas Concluidas
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
};

export const CountContext = createContext({} as TodoListProps);

export const  CrudProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [count,setCount] = useState(0)
    const [tasks, setTasks] = useState<Todo[]>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [textInput, setTextInput] = useState("");

    return(
        <CountContext.Provider
            value = {{task:tasks,setTextInput:setTextInput,textInput:textInput,setTasks:setTasks, count:count,setCount:setCount, isChecked:isChecked,setIsChecked:setIsChecked} }
        >
            {children}
        </CountContext.Provider>
    );
}