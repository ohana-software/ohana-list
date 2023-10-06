import logoTodo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import plus from "../../assets/plus.svg";
import { FormEvent, useState, ChangeEvent } from "react"

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props) {
    const [title, setTitle] = useState("");
    function handleSubmit(event: FormEvent){
      event.preventDefault();

      onAddTask(title);
      setTitle("")

    }
    function onChangeTitle (event: ChangeEvent<HTMLInputElement>){
      setTitle(event.target.value);
    }
  return (
    <header className={styles.header}>
      <img src={logoTodo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value ={title} />
        <button>
          Criar
          <img src={plus} />
        </button>
      </form>
    </header>
  );
}
