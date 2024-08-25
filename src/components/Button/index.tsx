import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    handleOnClick?: () => void;
    type?: 'submit'
    disabled?: boolean;
}

export function Button({ children, handleOnClick, type, disabled=false }: ButtonProps) {
    return (
        <button 
            type={type} 
            className={styles.button} 
            disabled={disabled} 
            onClick={handleOnClick}
        >
            {children}
        </button>
    )
}