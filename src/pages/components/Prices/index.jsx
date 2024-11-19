import style from "./style.module.css"
import cn from "classnames";
import Button from "../ui/Button/Button";
import { linkSession } from "@/constants";

const Index = () => {
    return (
        <div className={style.container}>
            <header className={style.heading}>
                <p className={cn("h5-md", style.namePages)}>// стоимость консультации</p>
                <p className={cn("h1-sm", style.slogan)}>Cделаем первый шаг к переменам вместе</p>
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
                        10 минут
                    </div>
                    <div className={cn("h2-md", style.countPrice)}>
                        6 000 ₽
                    </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--color-white-light)" }} className={style.price}>
                    <div className={cn("text1", style.type)}>
                        онлайн-формат
                    </div>
                    <div className={cn("h3-md", style.namePrice)} style={{ textTransform: "uppercase" }} >
                        Первичная консультация
                    </div>
                    <div className={cn("text1", style.textPrice)}>
                        Мы познакомимся и сможем понять, подходим ли друг другу.
                    </div>
                    <div className={cn("text2", style.duration)}>
                        10 минут
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