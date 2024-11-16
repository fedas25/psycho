import cn from 'classnames';
import styles from './style.module.css';

const Button = ({
    children,
    onClick = () => { },
    fullWidth = false,
    classes = [],
}) => {
    
    return (
        <button
            className={cn(
                "h5-md",
                styles.container,
                { [styles.fullWidth]: fullWidth },
                ...classes
            )}
            onClick={onClick}
        >
            <span>
                {children}
            </span>
            <div className={cn(styles.containerArrow, { [styles.fullWidth]: fullWidth })} >
                <div className={styles.arrows}>
                    <img className={styles.arrow} src='/arrow.svg' />
                    <img className={styles.arrow} src='/arrow.svg' />
                </div>
            </div>
        </button>
    );
};

export default Button