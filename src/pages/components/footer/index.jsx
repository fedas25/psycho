import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../ui/Button/Button";
import style from "./style.module.css"
import cn from "classnames";

const Index = () => {
    const width = useWindowWidth()
    return (
        <div className={style.container}>
            <p className={cn("h5-md", style.namePages)}>// контакты</p>
            <p className={cn("h1-sm", style.text)}>ПУСТЬ НАШЕ ПУТЕШЕСТВИЕ К ВАШЕЙ ЛУЧШЕЙ ЖИЗНИ НАЧЕТСЯ УЖЕ СЕГОДНЯ</p>

            <div className={style.contacts}>
                <p className={cn("h2-md")}>
                    <span>EMAL@GMAIL.COM</span>
                    <img src="/arrowWhite.svg" />
                </p>
                <p className={cn("h2-md")}>
                    <span>TELEGRAM</span>
                    <img src="/arrowWhite.svg" />
                </p>
                <p className={cn("h2-md")}>
                    <span>WHATSAPP</span>
                    <img src="/arrowWhite.svg" />
                </p>
                {
                    width > 1200 && (
                        <Button classes={[style.button]}>
                            ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                        </Button>
                    )
                }
            </div>
            {
                width < 1200 && (
                    <Button classes={[style.button]}>
                        ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                    </Button>
                )
            }
        </div>
    );
}

export default Index