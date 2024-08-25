import { InputHTMLAttributes } from 'react';
import styles from './Field.module.css';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
    label: string;
    handleOnChange: (value: string) => void;
}

export function Field({ id, label, handleOnChange, ...props}: FieldProps) {
    return (
        <fieldset className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} onChange={(event) => handleOnChange(event.target.value)}></input>
        </fieldset>
    )
}