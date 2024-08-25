import { FormEvent, useState } from 'react';
import styles from './AddTask.module.css';
import { Field } from '../Field';
import { Button } from '../Button';
import { ITask } from '../../shared/ITask';
import { v4 as uuidv4 } from 'uuid';

interface AddTaskProps {
    addNewTask: (task: ITask) => void
}

export function AddTask({ addNewTask }: AddTaskProps) {
    const [time, setTime] = useState<string>('00:00:00');
    const [subject, setSubject] = useState<string>('');

    function createNewTask(event: FormEvent) {
        event.preventDefault()

        const task = {
            name: subject, 
            time: time,
            id: uuidv4()
        }

        setTime('00:00:00');
        setSubject('');
        addNewTask(task)
    }

    return (
        <form className={styles.container} onSubmit={createNewTask}>
            <section>
                <Field 
                    placeholder='O que você quer estudar'
                    required
                    label='Adicione um novo estudo'
                    id='estudo'
                    handleOnChange={(value) => setSubject(value)}
                    value={subject}
                    type='text'
                />
                <Field 
                    id='time'
                    label='Tempo'
                    value={time}
                    handleOnChange={(value) => setTime(value)}
                    required
                    type='time'
                    step={1}
                    min='00:00:00'
                    max='01:30:00'
                />
            </section>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )
}