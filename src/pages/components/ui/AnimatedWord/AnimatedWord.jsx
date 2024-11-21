import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const AnimatedWord = ({ children, className = "" }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const ref = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsAnimated(true);
                        observer.disconnect(ref.current);
                    }
                });
            },
            {
                root: null,
                threshold: 0.4
            });

        if (ref?.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect(ref.current);
        }
    }, [ref]);

    return (
        <div ref={ref} style={{ overflow: "hidden", width: "100%" }}>
            <div className={cn(className, styles.wordDefault, { [styles.animation]: isAnimated })}>
                {children}
            </div>
        </div >
    )
}

export default AnimatedWord