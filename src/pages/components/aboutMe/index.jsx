import cn from 'classnames';
import styles from './style.module.css';
import Button from '../ui/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { linkYandexPodcast, linkVkPodcast, linkApplePodcast, linkInterview, linkArticle } from '@/constants';
import AnimatedWord from "../ui/AnimatedWord/AnimatedWord";

export default function AboutMe() {
    const elementRef = useRef(null);

    const [numderAcardionActive, setNumberAcardionActive] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                
                const numberAcardion = Math.round(((window.scrollY - 280) - rect.top) / 500) - 1;
                setNumberAcardionActive(numberAcardion);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const refEducations = useRef(null);
    const leftArea = useRef(null);
    const [pad, setPad] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const updateHeights = () => {
            const viewportHeight = window.innerHeight;
            const heightEducations = refEducations.current ? refEducations.current.getBoundingClientRect().height : 0
            const heightLeftArea = leftArea.current ? leftArea.current.getBoundingClientRect().height : 0
            
            setTop(refEducations.current.getBoundingClientRect().width < 760 ? heightLeftArea : 0)

            // setHeightContainer(Math.floor(viewportHeight - heightEducations + 5) + "px")
            setPad(refEducations.current.getBoundingClientRect().width < 760 ? Math.floor(viewportHeight - heightEducations + 5) + "px" : 0)
        };

        window.addEventListener('resize', updateHeights);
        updateHeights();

        return () => {
            window.removeEventListener('resize', updateHeights);
        };
    }, []);

    return (
        <div className={styles.containerAnimated}>
            <div className={styles.container}
            style={{ paddingBottom: pad, top: -top }}
            ref={refEducations}>
                <div className={cn(styles.myName, "h1-sm")}>
                    <h5 className={cn(styles.aboutMe, "h5-md")}>// ОБО МНЕ</h5>
                    <div>
                        <AnimatedWord>
                            <div className={cn(styles.wordSecond)}>Здравствуйте,</div>
                        </AnimatedWord>
                        <AnimatedWord>
                            <div>Меня Зовут Кузина Наталья</div>
                        </AnimatedWord>
                    </div>
                </div>

                <div className={styles.leftArea} ref={leftArea}>
                    <span className={cn(styles.description, "text1")}>
                        Я клинический психолог, работаю в современных контекстуально-поведенческих подходах с подростками с возраста 15 лет и взрослыми.
                    </span>
                    <div>
                        <h4 style={{ textTransform: "uppercase" }} className="h4-md">веду подкаст о психологах и психологии</h4>
                        <div className={styles.links}>
                            <Button link={linkYandexPodcast}>Яндекс музыка</Button>
                            <Button link={linkVkPodcast}>Vk</Button>
                            <Button link={linkApplePodcast}>apple podcasts</Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="h4-md" style={{ textAlign: "end", textTransform: "uppercase" }}>Интервью для канала Ольги Дьорди «Счастье это навык»</h4>
                        <div className={styles.links} style={{ justifyContent: "flex-end" }}>
                            <Button link={linkInterview}>Интервью</Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="h4-md" style={{ textTransform: "uppercase" }}>Моя статья с техниками, как управлять стрессом</h4>
                        <div className={styles.links}>
                            <Button link={linkArticle}>Статья</Button>
                        </div>
                    </div>
                </div>

                <div className={cn(styles.educations, "h4-md")} ref={elementRef}>
                    <div style={{ position: "relative" }}>

                        <div className={cn(styles.education, { [styles.show]: numderAcardionActive < 2 })}>
                            <h2 className={cn('h2-md', styles.training)}>ОБРАЗОВАНИЕ</h2>
                            <div className={styles.trainingItem}>
                                <p>
                                    Первый Московский государственный медицинский университет имени И. М. Сеченова
                                </p>
                            </div>
                            <div className={styles.trainingItem}>
                                <p>
                                    Московский педагогический государственный университет, Москва
                                </p>
                            </div>
                            <div className={styles.trainingItem}>
                                <p>
                                    Национальный университет современных технологий
                                </p>
                            </div>
                            <div className={styles.trainingItem}>
                                <p>
                                    Магистрант общественного здоровья и здравоохранения
                                </p>
                            </div>
                        </div>
                        <div className={cn(styles.advantages, { [styles.show]: numderAcardionActive >= 2 })}>
                            <h2 className={cn('h2-md', styles.training)}>ГАРАНТИРУЮ В ПРОЦЕССЕ ТЕРАПИИ</h2>
                            <div className={cn(styles.trainingItem, { [styles.trainingItemActive]: numderAcardionActive < 3 } )}>
                                <p>
                                    полную конфиденциальность
                                </p>
                                <p className={cn(styles.accordion, "text1")}>
                                    Я не имею права делиться вашими секретами с третьими лицами, за исключением случаев, когда существует угроза для вашей жизни или здоровья
                                    других людей. Это и касается ситуаций, когда вы можете нанести вред себе или намерены покончить жизнь самоубийством.
                                </p>
                            </div>
                            <div className={cn(styles.trainingItem, { [styles.trainingItemActive]: numderAcardionActive === 3 } )}>
                                <p>
                                    Доверие между вами и мной психологом
                                </p>
                                <p className={cn(styles.accordion, "text1")}>
                                    Насколько вы можете, настолько и доверяйте. Откровенность не может быть принудительной; она возникает естественным образом, когда вы будите готовы.
                                    Доверие — это взаимный процесс, который создается совместными усилиями обоих участников терапии.
                                </p>
                            </div>
                            <div className={cn(styles.trainingItem, { [styles.trainingItemActive]: numderAcardionActive === 4 } )}>
                                <p>
                                    Уважение и беспристрастность
                                </p>
                                <p className={cn(styles.accordion, "text1")}>
                                    В процессе работы не будет осуждения или личных мнений.
                                    Вместо этого я стремлюсь создать пространство, где ваша автономность и уникальность ценятся и уважаются.
                                </p>
                            </div>
                            <div className={cn(styles.trainingItem, { [styles.trainingItemActive]: numderAcardionActive > 4 } )}>
                                <p>
                                    Независимость и безопасность
                                </p>
                                <p className={cn(styles.accordion, "text1")}>
                                    Вы имеете полное право завершить терапию в любой момент, когда посчитаете это нужным.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
