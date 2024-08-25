import { formatTimeFromMiliseconds } from '../../../utils/time';
import styles from './Watch.module.css';

interface WatchProps {
    time: number;
}

export function Watch({ time }: WatchProps) {
    const timeArray = formatTimeFromMiliseconds(time).split('');

    return (
        <>
            {timeArray.map((item, index) => <span 
                key={index}
                className={item === ':'? styles.watchDiv : styles.watchNumber}
            >
                {item}
            </span>)}
        </>
    )
}