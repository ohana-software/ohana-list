import React, { createContext, useEffect, useState } from "react";

type Todo = {
    id: number;
    text: string;
};

// Defina as props do componente
type TodoListProps = {
    task:Todo[]; // Um array de objetos do tipo Todo
    textInput: string
    setTextInput: React.Dispatch<React.SetStateAction<string>>
    setTasks: React.Dispatch<React.SetStateAction<{
        id: number;
        text: string;
    }[]>>
};

export const CountContext = createContext({} as TodoListProps);

export const  CountProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            text: "teste",
        },
        {
            id: 1,
            text: "teste2",
        }
    ]);
    const [textInput, setTextInput] = useState("");

    return(
        <CountContext.Provider
            value = {{task:tasks,setTextInput:setTextInput,textInput:textInput,setTasks:setTasks} }
        >
            {children}
        </CountContext.Provider>
    );
}