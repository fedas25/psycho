import styles from './style.module.css';
import { useRef, useState } from 'react';

export default function Advantages() {
    const [isAnimated, setIsAnimated] = useState(false);
    const ref = useRef(null);

    return (
        <div className={styles.container}>
            a
        </div>
    )
}
