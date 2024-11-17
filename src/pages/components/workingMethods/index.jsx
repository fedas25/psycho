import { useState } from "react";
import style from "./style.module.css"
import cn from "classnames";
import WorkingMethod from "./workingMethod";
import useWindowWidth from "@/hooks/useWindowWidth";

const dataTerapev = [
    {
        "name": "Фокусированная терапия принятия и ответственности (FACT)",
        "description": "Краткосрочный, интенсивный подход, акцентирующий внимание на изменении поведения и принятии решений через фокусировку на важных аспектах жизни клиента за короткий период времени",
        "hashtags": ["быстрое изменение поведения", "решение конкретных проблем за короткий срок", "снижение тревоги и депрессии", "улучшение качества жизни за короткий срок"]
    },
    {
        "name": "Терапия эмоциональной эффективности (ТЭЭ)",
        "description": "Развитие эмоциональной грамотности и навыков управления эмоциями для повышения эффективности в жизни.",
        "hashtags": ["Развитие навыков управления эмоциями", "улучшие межличностных отношений", "улучшение способности принимать решения", "развития навыков эмоциональной самоподдержки", "повышение общей эффективности жизни"]
    },
    {
        "name": "Мотивационное интервью (MI)",
        "description": "Краткосрочный метод консультирования, направленный на выявление и усиление внутренней мотивации клиента к изменениям.",
        "hashtags": ["повышение внутренней мотивации к изменениям", "повышение ответственности за собственные решения", "улучшение самопонимания", "изменение вредных привычек", "повышение самоконтроля"]
    },
    {
        "name": "Терапия, сфокусированная на сострадании (CFT)",
        "description": "Развитие сострадания к себе и другим.",
        "hashtags": ["снижение самокритики и чувства стыда", "улучшение самооценки", "снижение зависимости от внешних оценок", "изменение нездорового отношения к телу и еде", "снижение чувства изоляции и одиночества"]
    }
]

const dataSupervision = [
    {
        "name": "S - Sensitization to the model (Чувствительность к модели)",
        "titles": [
            {
                "name": "Знакомство с основами ACT",
                "textTitle": "На этом этапе супервизор помогает терапевту лучше понять теоретические основы ACT, такие как шесть ключевых процессов, направленных на развитие психологической гибкости."
            },
            {
                "name": "Чувствительность к ценностям клиента",
                "textTitle": "Терапевты учатся быть более осведомленными о том, как ценности клиентов влияют на их поведение, и как направлять клиентов на жизнь, основанную на этих ценностях."
            }
        ]
    },
    {
        "name": "E - Embedding in own practice (Внедрение в собственную практику)",
        "titles": [
            {
                "name": "Применение ACT в работе и жизни терапевта",
                "textTitle": "Важным аспектом модели SEED является то, что терапевты должны интегрировать принципы ACT не только в работу с клиентами, но и в свою собственную жизнь."
            },
            {
                "name": "Осознанность и принятие в профессиональной роли",
                "textTitle": "Терапевт учится принимать свои собственные сомнения, трудности и неуверенность, которые могут возникать в процессе профессиональной деятельности."
            }
        ]
    },
    {
        "name": "E - Ethical and effective practice (Этичная и эффективная практика)",
        "titles": [
            {
                "name": "Этичность как ключевой элемент супервизии",
                "textTitle": "Супервизор поддерживает терапевта в том, чтобы его работа соответствовала высоким этическим стандартам, в том числе уважению к автономии клиентов, конфиденциальности и профессиональной честности."
            },
            {
                "name": "Повышение эффективности через обратную связь",
                "textTitle": "Модель SEED предполагает постоянное предоставление обратной связи и совместное размышление о том, как можно повысить эффективность вмешательства и лучше поддерживать клиента в процессе терапии."
            }
        ]
    },
    {
        "name": "D - Development of competencies (Развитие компетенций)",
        "titles": [
            {
                "name": "Непрерывное обучение и рост",
                "textTitle": "SEED подчеркивает важность постоянного развития компетенций терапевта, как в понимании ACT, так и в его практическом применении."
            },
            {
                "name": "Работа над личными трудностями",
                "textTitle": "Терапевт в супервизии также прорабатывает свои собственные сложности, которые могут препятствовать эффективной работе с клиентами, например, самокритика, неуверенность или страх перед трудными случаями."
            }
        ]
    }
]

const Index = () => {
    const isMobile = useWindowWidth() < 760;
    const [activeGroupMethods, setActiveGroupMethods] = useState(0);

    const [activeMethodsLeft, setActiveMethodsLeft] = useState(new Set());
    const [activeMethodsRight, setActiveMethodsRight] = useState(new Set());

    const toggleActiveMethodsLeft = (id) => {
        setActiveMethodsLeft((prev) => {
            const newSet = new Set(prev);
            prev.has(id) ? newSet.delete(id) : newSet.add(id)
            return newSet;
        });
    }
    const toggleActiveMethodsRight = (id) => {
        setActiveMethodsRight((prev) => {
            const newSet = new Set(prev);
            prev.has(id) ? newSet.delete(id) : newSet.add(id)
            return newSet;
        });
    }

    return (
        <div className={style.container}>
            <p className={cn("h5-md", style.namePages)}>// Методы работы</p>

            <div style={{ width: "100%", display: "flex", }} >
                <div style={{ width: "50%" }}>
                    <div
                        className={cn(style.toggleButton, "h4-md")}
                        onClick={() => setActiveGroupMethods(0)}
                    >

                        <span className={cn(
                            style.toggleDefault,
                            { [style.hiddenToggle]: activeGroupMethods === 1 })
                        }>
                            ТЕРАПЕВТИЧЕСКИЕ ПОДХОДЫ
                        </span>
                        <img
                            className={cn(
                                style.toggleDefault,
                                { [style.hiddenToggle]: activeGroupMethods === 1 })}
                            src="/ellipse.svg"
                        />
                    </div>
                    {
                        !isMobile && (
                            <div
                                className={cn({ [style.none]: activeGroupMethods === 1 })}
                                style={{ transition: "opacity ease-in-out 0.5s" }}
                            >
                                {dataTerapev.map((item, id) => (
                                    <WorkingMethod
                                        key={item.name}
                                        setIsOpen={() => toggleActiveMethodsLeft(id)}
                                        isOpen={activeMethodsLeft.has(id)}
                                        name={item.name}
                                        text={item.description}
                                        hashtags={item.hashtags}
                                    />
                                ))}
                            </div>
                        )
                    }
                </div>

                <div style={{ width: "50%", borderLeft: "1px solid var(--color-brown-light)" }}>
                    <div
                        className={cn(style.toggleButton, "h4-md")}
                        onClick={() => setActiveGroupMethods(1)}
                    >
                        <span className={cn(
                            style.toggleDefault,
                            { [style.hiddenToggle]: activeGroupMethods === 0 })
                        }>
                            супервизия
                        </span>
                        <img
                            className={cn(
                                style.toggleDefault,
                                { [style.hiddenToggle]: activeGroupMethods === 0 })}
                            src="/ellipse.svg"
                        />
                    </div>
                    {
                        !isMobile && (
                            <div
                                className={cn({ [style.none]: activeGroupMethods === 0 })}
                                style={{ transition: "opacity ease-in-out 0.5s" }}
                            >
                                <WorkingMethod
                                    key="ЦЕЛИ"
                                    setIsOpen={() => toggleActiveMethodsRight(0)}
                                    isOpen={activeMethodsRight.has(0)}
                                    name="ЦЕЛИ"
                                    text="Эта модель помогает супервизорам поддерживать и направлять терапевтов в их профессиональном развитии, одновременно обеспечивая соответствие терапевтической работы основным принципам ACT."
                                    hashtags={["развития психологической гибкости терапевтов", "повышение эффективности работы с клиентами", "формирование глубокой связи с клиентом"]}
                                />
                                <div className={cn("h4-md", style.nameSubgroups)}>
                                    ОСНОВНЫЕ АСПЕКТЫ
                                </div>
                                {dataSupervision.map((item, id) => (
                                    <WorkingMethod
                                        type="supervision"
                                        key={item.name}
                                        setIsOpen={() => toggleActiveMethodsRight(id + 1)}
                                        isOpen={activeMethodsRight.has(id + 1)}
                                        name={item.name}
                                        hashtags={item.titles}
                                    />
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>

            {
                isMobile && (
                    <div style={{ width: "100%" }} >
                        <div
                            className={cn({ [style.none]: activeGroupMethods === 1 })}
                        >
                            {dataTerapev.map((item, id) => (
                                <WorkingMethod
                                    key={item.name}
                                    setIsOpen={() => toggleActiveMethodsLeft(id)}
                                    isOpen={activeMethodsLeft.has(id)}
                                    name={item.name}
                                    text={item.description}
                                    hashtags={item.hashtags}
                                />
                            ))}
                        </div>

                        <div
                            className={cn({ [style.none]: activeGroupMethods === 0 })}
                        >
                            <WorkingMethod
                                key="ЦЕЛИ"
                                setIsOpen={() => toggleActiveMethodsRight(0)}
                                isOpen={activeMethodsRight.has(0)}
                                name="ЦЕЛИ"
                                text="Эта модель помогает супервизорам поддерживать и направлять терапевтов в их профессиональном развитии, одновременно обеспечивая соответствие терапевтической работы основным принципам ACT."
                                hashtags={["развития психологической гибкости терапевтов", "повышение эффективности работы с клиентами", "формирование глубокой связи с клиентом"]}
                            />
                            <div className={cn("h4-md", style.nameSubgroups)}>
                                ОСНОВНЫЕ АСПЕКТЫ
                            </div>
                            {dataSupervision.map((item, id) => (
                                <WorkingMethod
                                    type="supervision"
                                    key={item.name}
                                    setIsOpen={() => toggleActiveMethodsRight(id + 1)}
                                    isOpen={activeMethodsRight.has(id + 1)}
                                    name={item.name}
                                    hashtags={item.titles}
                                />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
}



export default Index
