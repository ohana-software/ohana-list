import styles from "./task.module.css";
import layer from "../../assets/Layer 1.svg";
import trash from "../../assets/trash.svg";
import { ITask } from "../../App";
import layerCompleted from "../../assets/LayerCompleted.svg";





interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}
export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
       <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <img src={layerCompleted}/> : <img src={layer}/>}
      </button>
      
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
     
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <img src={trash} />
      </button>
    </div>
  );
}
