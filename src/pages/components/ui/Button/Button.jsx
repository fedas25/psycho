import cn from 'classnames';
import styles from './style.module.css';

const Button = ({
    children,
    onClick = () => { },
    fullWidth = false,
    classes = [],
    classesArrow = [],
    link = "",
}) => {
    return (
        <a
            className={cn(
                "h5-md",
                styles.container,
                { [styles.fullWidth]: fullWidth },
                ...classes
            )}
            onClick={onClick}
            href={link}
            target='blank'
        >
            <span className={styles.text}>
                {children}
            </span>
            <div className={cn(styles.containerArrow, { [styles.fullWidth]: fullWidth })} >
                <div className={styles.arrows}>
                    <img
                        className={cn(...classesArrow, styles.arrow)}
                        src='/arrowMain.svg'
                    />
                    <img className={cn(...classesArrow, styles.arrow)} src='/arrowMain.svg' />
                </div>
            </div>
        </a>
    );
};

export default Button