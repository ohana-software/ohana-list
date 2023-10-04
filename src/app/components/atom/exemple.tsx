"use client";
import { Box, Textarea, Checkbox, Button ,FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { Trash }  from "./Icons";

interface Task {
  id: number;
  checked: boolean;
  text: string;
}

interface TaskPreencherProps {
  tasks: Task[];
  def: (event: any, taskId: number) => void;
  ondelete: (taskId: number) => void;
}

const TaskPreencher: React.FC<TaskPreencherProps> = ({ tasks, def, ondelete }) => {
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [draggedTaskPosition, setDraggedTaskPosition] = useState<number>(0);

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, task: Task) => {
    e.dataTransfer.setData("text/plain", `${task.id}`);
    e.currentTarget.classList.add("dragging");
    setDraggedTask(task);
    setDraggedTaskPosition(e.clientY);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
    document.querySelectorAll(".TaskParaPreencher").forEach((task) => {
      task.classList.remove("dragging");
    });
  };

  return (
    <ul onDragOver={(e) => e.preventDefault()} onDrop={handleDragEnd}>
      {tasks.map((task) => (
        <li
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, task)}
          onDragEnd={handleDragEnd}
        >
          <Box as="div">
            <Checkbox
              title="radiobutton"
              isChecked={task.checked}
              onChange={(event) => def(event, task.id)}
            />
            <Box as="div" className="FakeButton Completed"></Box >
          </Box>
          <FormLabel   htmlFor="task">
            <Textarea
              title="description"
              className={task.checked ? "Texto tarefacompleta" : "Texto"}
              name="task"
              defaultValue={task.text}
            />
          </FormLabel >
          <Button className="BotaoLixo" onClick={() => ondelete(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TaskPreencher;