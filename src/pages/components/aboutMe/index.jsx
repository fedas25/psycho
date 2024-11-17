import cn from 'classnames';
import styles from './style.module.css';
import Button from '../ui/Button/Button';
import { useEffect, useRef, useState } from 'react';

// TODO Вынести анимацию появления текста в отдельный компонент или хук
export default function AboutMe() {
    const [isAnimated, setIsAnimated] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current && !isAnimated) {
            const rect = ref.current.getBoundingClientRect();

            const isAnimated = (rect.top - window.innerHeight) < 0;

            setIsAnimated(isAnimated);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const elementRef = useRef(null);

    const [numderAcardionActive, setNumberAcardionActive] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                if (elementRef.current) {
                    const rect = elementRef.current.getBoundingClientRect();

                    if (rect.top < 248) {
                        const numberAcardion = Math.floor((window.scrollY - rect.top) / 1000);

                        setNumberAcardionActive(numberAcardion);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const refEducations = useRef(null);
    const [heightContainer, setHeightContainer] = useState(0);

    useEffect(() => {
        const updateHeights = () => {
            const viewportHeight = window.innerHeight;
            const heightEducations = refEducations.current ? refEducations.current.getBoundingClientRect().height : 0;

            setHeightContainer(Math.floor(viewportHeight - heightEducations + 5) + "px")
        };

        window.addEventListener('resize', updateHeights);
        updateHeights();

        return () => {
            window.removeEventListener('resize', updateHeights);
        };
    }, []);

    return (
        <>
            <div className={styles.containerAnimated}>

                <div className={styles.container} style={{ top: heightContainer }} ref={refEducations}>
                    <div className={cn(styles.myName, "h1-sm")}>
                        <h5 className={cn(styles.aboutMe, "h5-md")}>// ОБО МНЕ</h5>
                        <div>
                            <div ref={ref} style={{ overflow: "hidden" }}>
                                <div className={cn({ [styles.wordAnimation]: isAnimated })}>привет,</div>
                            </div>
                            <div style={{ overflow: "hidden" }}>
                                <div className={cn({ [styles.wordAnimation]: isAnimated })}>Меня Зовут Кузина Наталья</div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.leftArea}>
                        <span className={cn(styles.description, "text1")}>
                            Я клинический психолог, работаю в современных контекстуально-поведенческих подходах с подростками с возраста 15 лет и взрослыми.
                        </span>
                        <div>
                            <h4 style={{ textTransform: "uppercase" }} className="h4-md">веду подкаст о психологах и психологии</h4>
                            <div className={styles.links}>
                                <Button>Яндекс музыка</Button>
                                <Button>Vk</Button>
                                <Button>apple podcasts</Button>
                            </div>
                        </div>
                        <div>
                            <h4 className="h4-md" style={{ textAlign: "end", textTransform: "uppercase" }}>Интервью для канала Ольги Дьорди «Счастье это навык»</h4>
                            <div className={styles.links} style={{ justifyContent: "flex-end" }}>
                                <Button>Яндекс музыка</Button>
                            </div>
                        </div>
                        <div>
                            <h4 className="h4-md" style={{textTransform: "uppercase"}}>Моя статья с техниками, как управлять стрессом</h4>
                            <div className={styles.links}>
                                <Button>Яндекс музыка</Button>
                            </div>
                        </div>
                    </div>

                    {/* TODO Сделать выравниване какоенибуль, что бы не прыгали пункты по высоте при открытии */}
                    {/* TODO Сделать блок без акардиона и сделать адаптацию, чтобы к низу клеилось и под все устройства */}

                    {/* Вынести блочёк для создания красивой анимайции */}
                    <div className={cn(styles.educations, "h4-md")} ref={elementRef}>
                        <div style={{ position: "relative" }}>

                            <div className={cn(styles.education, { [styles.show]: numderAcardionActive < 4 })}>
                                <h2 className={cn('h2-md', styles.training)}>ОБРАЗОВАНИЕ</h2>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                </div>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                </div>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                </div>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                </div>
                            </div>

                            <div className={cn(styles.advantages, { [styles.show]: numderAcardionActive >= 4 })}>
                                <h2 className={cn('h2-md', styles.training)}>ЛЯЛЯЛЯЛЯЛЯ</h2>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                    <p className={cn(styles.accordion, { [styles.accordionActive]: numderAcardionActive < 5 }, "text1")}>
                                        Я не имею права делиться вашими секретами с третьими лицами, за исключением случаев, когда существует угроза для вашей жизни или здоровья других людей.
                                        Это и касается ситуаций, когда вы можете нанести вред себе или намерены покончить жизнь самоубийством.
                                    </p>
                                </div>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                    <p className={cn(styles.accordion, { [styles.accordionActive]: numderAcardionActive === 5 }, "text1")}>
                                        Я не имею права делиться вашими секретами с третьими лицами, за исключением случаев, когда существует угроза для вашей жизни или здоровья других людей.
                                        Это и касается ситуаций, когда вы можете нанести вред себе или намерены покончить жизнь самоубийством.
                                    </p>
                                </div>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                    <p className={cn(styles.accordion, { [styles.accordionActive]: numderAcardionActive === 6 }, "text1")}>
                                        Я не имею права делиться вашими секретами с третьими лицами, за исключением случаев, когда существует угроза для вашей жизни или здоровья других людей.
                                        Это и касается ситуаций, когда вы можете нанести вред себе или намерены покончить жизнь самоубийством.
                                    </p>
                                </div>
                                <div className={styles.trainingItem}>
                                    <p>
                                        Национальный университет современных технологий
                                    </p>
                                    <p className={cn(styles.accordion, { [styles.accordionActive]: numderAcardionActive >= 7 }, "text1")}>
                                        Я не имею права делиться вашими секретами с третьими лицами, за исключением случаев, когда существует угроза для вашей жизни или здоровья других людей.
                                        Это и касается ситуаций, когда вы можете нанести вред себе или намерены покончить жизнь самоубийством.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
