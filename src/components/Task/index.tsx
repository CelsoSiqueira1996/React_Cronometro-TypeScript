import { ITask } from '../../shared/ITask';
import styles from './Task.module.css';
import { IoCheckmark } from "react-icons/io5";

interface TaskProps {
    task: ITask;
    taskSelected: ITask;
    tasksCompleted: ITask[]
    selectTask: (task: ITask) => void;
}

export function Task({ task, taskSelected, tasksCompleted, selectTask }: TaskProps) {
    const completed = tasksCompleted.some((element) => element.id === task.id)
    const selected = taskSelected.id === task.id; 
    const style = completed? 'task-completed' : selected? 'task-selected' : 'task'

    return (
        <li className={styles[style]} onClick={() => selectTask(task)}>
            <div className={styles.content}>
                <h3>{task.name}</h3>
                <span>{task.time}</span>
            </div>
            {completed && <IoCheckmark 
                size={48}
            />}
        </li>
    )
}