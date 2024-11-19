import style from "./style.module.css"
import cn from "classnames";
import Button from "../ui/Button/Button";
import { linkSession } from "@/pages/components/constants";

const data = [
    {
        name: "Краткосрочная",
        count: "1-6 сессий",
        text: "Высокая мотивация разобраться в сложившейся ситуации, то возможно запустить процесс изменений и понимания, что с тобой происходит, за пару сессий."
    },
    {
        name: "Среднесрочная",
        count: "2-20 сессий",
        text: "Когда хочется разобраться в своих мыслях, чувствах, реакциях, поведении и взаимодействии с окружающими и тебе нужно время для овладения и закрепления новых навыков."
    },
    {
        name: "Долгосрочная",
        count: "20 сессий и более",
        text: "Иногда случается так, что в жизни могут происходить события, которые «делят» жизнь на до и после, тогда потребуется больше поддержки, понимания и помощи в поиске ценностей и смыслов."
    }
];

const Index = () => {
    return (
        <div className={style.container}>
            <header className={style.heading}>
                <p className={cn("h5-md", style.namePages)}>// варианты терапевтической работы</p>
                <p className={cn("h1-sm", style.slogan)}>ПОДДЕРДЖУ ВАС НА СЛОЖНОМ ЖИЗНЕННОМ ЭТАПЕ</p>
                <p className={cn("text1", style.description)}>
                    Каждый новый шаг вперёд — это шаг к внутренней силе, осознанности и новым возможностям
                </p>
                <Button link={linkSession} classes={[style.button]}>Записаться на консультацию</Button>
            </header>
            <div className={style.prices}>
                {data.map(({ name, count, text }) => (
                    <div className={style.price} key={name}>
                        <p className={cn(style.namePrice, "h2-md")}>{name}</p>
                        <div className={cn(style.count, "text2")}>{count}</div>
                        <div className={cn("text1", style.textPrice)}>{text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index