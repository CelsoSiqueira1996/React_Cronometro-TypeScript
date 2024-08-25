import styles from './DropDownList.module.css';

interface DropDownListProps {
    id: string;
    label: string;
    placeholder: string;
    handleOnChange: (value: string) => void
    required?: boolean
    value: string;
}

export function DropDownList({ id, value, label, handleOnChange, placeholder, required=false}: DropDownListProps) {
    const optionsList = [
        'Java', 'JavaScript', 'TypeScript', 'NodeJs', 'React', 'Vue', 'Express', 'SQL', 'NoSQL'
    ];

    return (
        <fieldset className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <select 
                required={required} 
                id={id} 
                onChange={(event) => handleOnChange(event.target.value)}
                value={value}
            >
                <option disabled value='' hidden>{placeholder}</option>
                {optionsList.map((option) => <option key={option} value={option}>{option}</option>)}  
            </select>
        </fieldset>
    )
}