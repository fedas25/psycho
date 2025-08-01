import style from "./style.module.css"
import cn from "classnames";
import { linkSession } from "../../../constants";
import Button from "../ui/Button/Button";
import AnimatedWord from "../ui/AnimatedWord/AnimatedWord";

const Index = () => {
    return (
        <div className={style.container}>
            <header className={style.heading}>
                <p className={cn("h5-md", style.namePages)}>// стоимость консультации</p>
                <AnimatedWord>
                    <p className={cn("h1-sm", style.slogan)}>Cделаем первый шаг к переменам вместе</p>
                </AnimatedWord>
                <Button link={linkSession} classes={[style.button]}>Записаться на консультацию</Button>
            </header>
            <div className={style.prices}>
                <div className={style.price}>
                    <div className={cn("text1", style.type)}>
                        онлайн-формат
                    </div>
                    <div className={cn("h3-md", style.namePrice)} style={{ textTransform: "uppercase" }}>
                        Первичная консультация
                    </div>
                    <div className={cn("text1", style.textPrice)}>
                        Мы познакомимся и сможем понять, подходим ли друг другу.
                    </div>
                    <div className={cn("text2", style.duration)}>
                        30 минут
                    </div>
                    <div className={cn("h2-md", style.countPrice)}>
                        2 600 ₽
                    </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--color-white-light)" }} className={style.price}>
                    <div className={cn("text1", style.type)}>
                        онлайн-формат
                    </div>
                    <div className={cn("h3-md", style.namePrice)} style={{ textTransform: "uppercase" }} >
                        Терапевтическая сессия
                    </div>
                    <div className={cn("text1", style.textPrice)}>
                        Встреча направленная на доверие и проффесиональную поддержку. 
                    </div>
                    <div className={cn("text2", style.duration)}>
                        50-55 минут
                    </div>
                    <div className={cn("h2-md", style.countPrice)}>
                        6 000 ₽
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index