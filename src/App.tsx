import { useState } from 'react'
import { AddTask } from './components/AddTask'
import { ITask } from './shared/ITask'
import styles from './App.module.css';
import { AsideBar } from './components/AsideBar';
import { Title } from './components/Title';
import { Timer } from './components/Timer';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskSelected, setTaskSelected] = useState<ITask>({name: '', time: '00:00:00', id: ''});
  const [tasksCompleted, setTasksCompleted] = useState<ITask[]>([]);

  return (
    <main className={styles.container}>
      <section>
        <AddTask 
          addNewTask={(task) => setTaskList([...taskList, task])}
        />
        <Title>
          Escolha um card e inicie o cronômetro
        </Title>
        <Timer 
          task={taskSelected}
          addCompletedTask={(task) => {
            setTasksCompleted([...tasksCompleted, task]);
            setTaskSelected({name: '', time: '00:00:00', id: ''})
          }}
        />
      </section>
      <AsideBar 
        selectTask={(task) => setTaskSelected(task)} 
        taskList={taskList} 
        taskSelected={taskSelected}
        tasksCompleted={tasksCompleted}
      />
    </main>
  )
}

export default App
