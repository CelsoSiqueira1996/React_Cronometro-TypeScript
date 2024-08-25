import { useEffect, useState } from 'react';
import { ITask } from '../../shared/ITask';
import { Button } from '../Button';
import styles from './Timer.module.css';
import { Watch } from './Watch';
import { transformTimeToMiliseconds } from '../../utils/time';

interface TimerProps {
    task: ITask;
    addCompletedTask: (task: ITask) => void;
}

export function Timer({ task, addCompletedTask }: TimerProps) {
    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState(false);
    const timeOut = !time;

    useEffect(() => {
        const timeMiliseconds = transformTimeToMiliseconds(task.time);
        setTime(timeMiliseconds);
        setIsActive(false);
    },[task])
    
    useEffect(() => {
      let intervalId:number = 0;
      if (isActive && !timeOut) {
        intervalId = setInterval(() => {
          setTime(previousTime => previousTime - 1000);
        }, 1000);
      } 
      if(timeOut) addCompletedTask(task);
      return () => clearInterval(intervalId);
    }, [isActive, timeOut]);

    return (
        <section className={styles.container}>
            <div>
                <Watch time={time}/>
            </div>
            <Button 
                handleOnClick={() => setIsActive((state) => !state)} 
                disabled={!time? true : false}>
                {!time? 'Começar!' : !isActive? 'Começar!' : 'Parar!'}
            </Button>
        </section>

    )
}