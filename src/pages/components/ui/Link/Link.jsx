import cn from 'classnames';
import styles from './style.module.css';

const Link = ({
    children,
    link = "",
}) => {
    return (
        <a
            className={cn(
                "h2-md",
                styles.container
            )}
            href={link}
            target='blank'
        >
            <span className={styles.text}>
                {children}
            </span>
            <div className={cn(styles.containerArrow)} >
                <div className={styles.arrows}>
                    <img className={styles.arrow} src='/arrowMain.svg' />
                    <img className={styles.arrow} src='/arrowMain.svg' />
                </div>
            </div>
        </a>
    );
};

export default Link