import style from "./style.module.css"
import useObserver from "@/hooks/useObserver";
import cn from "classnames";
import Button from "../ui/Button/Button";
import { linkTest } from "@/constants";
import AnimatedWord from "../ui/AnimatedWord/AnimatedWord";

const data = [
    {
        "text": "Эмоциональные и психологические трудности",
        "hashtags": [
            "// тревога",
            "// депрессия",
            "// панические атаки",
            "// Навязчивые мысли и страхи",
            "// посттравматическое стрессовое расстройство (ПТСР)",
            "// обсессивно-компульсивное расстройство (ОКР)",
            "// бессонница",
            "// трудности в принятии решения",
            "// Апатия и потеря энергии"
        ]
    },
    {
        "text": "Семейные и близкие отношения",
        "hashtags": [
            "// Сложности в партнёрских отношениях",
            "// развод",
            "// измена",
            "// Родительско-детские отношения",
            "// нарушение границ",
            "// утрата близкого"
        ]
    },
    {
        "text": "Синдром отложенной жизни",
        "hashtags": [
            "// неуверенность в себе",
            "// Страх перемен",
            "// Перфекционизм",
            "// зацикливание на прошлом",
            "// Прокрастинация"
        ]
    },
    {
        "text": "Проблемы с телесным здоровьем и питанием",
        "hashtags": [
            "// непринятие собственного тела",
            "// переедание",
            "// расстройства пищевого поведения (РПП)",
            "// нервная булимия",
            "// анорексия",
            "// ожирение"
        ]
    },
    {
        "text": "Сексуальные отношения",
        "hashtags": [
            "// отсутствие сексуального желания",
            "// сложности с доверием к партнеру",
            "// отчуждённость во время близости",
            "// измена",
            "// травматический сексуальный опыт"
        ]
    },
    {
        "text": "Зависимые состояния (аддикции)",
        "hashtags": [
            "// алкогольная",
            "// никотиновая",
            "// Интернет- и игровая зависимость",
            "// Азартные игры (лудомания, гэмблинг)",
            "// наркотическая"
        ]
    },
    {
        "text": "Жизненные кризисы и изменения",
        "hashtags": [
            "// возрастные кризисы",
            "// Переживание одиночества",
            "// Коррекция и исцеление ситуаций прошлого",
            "// экзистенциальный кризис"
        ]
    }
]

const Index = () => {
    const [elementsRefs, activeElements] = useObserver();

    return (
        <div className={style.container}>
            <header className={style.heading}>
                <p className={cn("h5-md", style.namePages)}>// c чем работаю</p>
                <AnimatedWord>
                    <p className={cn("h1-sm", style.slogan)}>Вместе мы сможем преодолеть трудности</p>
                </AnimatedWord>
                <Button link={linkTest} classes={[style.button]}>ПРОЙТИ ТЕСТ НА УРОВЕНЬ ТРЕВОЖНОСТИ</Button>
            </header>

            {data.map((data, index) => (
                <div className={cn(style.case)} key={data.text} data-index={index} ref={(el) => elementsRefs.current[index] = el}>
                    <p className={cn(style.number, "h2-md", { [style.active]: activeElements.has(index) })}>
                        0{index + 1}
                    </p>
                    <div className={cn(style.text, "h2-md", { [style.active]: activeElements.has(index) })}>
                        {data.text}
                    </div>
                    <div className={cn(style.hashtags, "h5-md", { [style.active]: activeElements.has(index) })}>
                        {data.hashtags.map((hashtag) => (
                            <span key={hashtag}>{hashtag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Index