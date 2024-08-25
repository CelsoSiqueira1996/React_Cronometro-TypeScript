import { Title } from '../Title';
import { ITask } from '../../shared/ITask';
import { Task } from '../Task';
import styles from './AsideBar.module.css';

interface AsideBarProps {
    taskList: ITask[];
    taskSelected: ITask;
    tasksCompleted: ITask[];
    selectTask: (task: ITask) => void;
}

export function AsideBar({ taskList, taskSelected, tasksCompleted, selectTask }: AsideBarProps) {
    return (
        <aside className={styles.container}>
            <Title>
                Estudos do dia
            </Title>
            <ul>
                {taskList.length > 0 && taskList.map((task) => <Task 
                    key={task.id} 
                    task={task} 
                    selectTask={selectTask}
                    taskSelected={taskSelected}
                    tasksCompleted={tasksCompleted}
                />)}
            </ul>
        </aside>
    )
}