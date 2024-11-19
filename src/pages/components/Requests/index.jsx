import style from "./style.module.css"
import useObserver from "@/hooks/useObserver";
import cn from "classnames";
import Button from "../ui/Button/Button";
import { linkTest } from "@/pages/constants";

const data = [
    {
        text: "Жизненные кризисы и изменения",
        hashtags: ["// возрастные кризисы", "// утрата", "// горе", "// отношения в семье", "// развод"]
    },
    {
        text: "Эмоциональные и психологические расстройства",
        hashtags: ["// депрессия", "// тревога", "// панические атаки", "// посттравматическое стрессовое расстройство (ПТСР)", "// обсессивно-компульсивное расстройство (ОКР)", "// внутриличностные и межличностные конфликты", "// бессонница"]
    },
    {
        text: "Поведенческие и зависимые состояния",
        hashtags: ["// аддикции", "// алкоголь", "// наркотики", "// никотиновая зависимость", "// гэмблинг", "// лудомания", "// созависимость"]
    },
    {
        text: "Проблемы с телесным здоровьем и питанием",
        hashtags: ["// переедание", "// ожирение", "// расстройства пищевого поведения (РПП)"]
    },
    {
        text: "Сексуальные отношения",
        hashtags: ["// общая неудовлетворенность отношениями", "// отсутствие сексуального желания", "// сложности с доверием к партнеру", "// травматический сексуальный опыт", "// измена"]
    },
    {
        text: "Коррекция и исцеление ситуаций прошлого",
        hashtags: ["// неуверенность в себе", "// боязнь начала новой жизни", "// зацикливание на прошлом", "// потерянные внутренние силы"]
    }
];

const Index = () => {
    const [elementsRefs, activeElements] = useObserver();

    return (
        <div className={style.container}>
            <header className={style.heading}>
                <p className={cn("h5-md", style.namePages)}>// c чем работаю</p>
                <p className={cn("h1-sm", style.slogan)}>Вместе мы сможем преодолеть трудности</p>
                <Button link={linkTest} classes={[style.button]}>ПРОЙТИ ТЕСТ НА УРОВЕНЬ ТРЕВОЖНОСТИ</Button>
            </header>

            {data.map((data, index) => (
                <div className={cn(style.case)} key={data.text} data-index={index} ref={(el) => elementsRefs.current[index] = el}>
                    <p className={cn(style.number, "h2-md")}>
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