import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../ui/Button/Button";
import Link from "../ui/Link/Link";
import style from "./style.module.css"
import cn from "classnames";
import { linkEmail, linkTg, linkWhatsapp, linkSession } from "@/pages/constants";
import { forwardRef } from "react";

const Index = forwardRef((props, ref) => {
    const width = useWindowWidth()
    return (
        <div className={style.container} ref={ref}>
            <p className={cn("h5-md", style.namePages)}>// контакты</p>
            <p className={cn("h1-sm", style.text)}>ПУСТЬ НАШЕ ПУТЕШЕСТВИЕ К ВАШЕЙ ЛУЧШЕЙ ЖИЗНИ НАЧЕТСЯ УЖЕ СЕГОДНЯ</p>

            <div className={style.contacts}>
                <Link link={linkTg}>
                    TELEGRAM
                </Link>
                <Link link={linkEmail}>
                    EMAL@GMAIL.COM
                </Link>
                <Link link={linkWhatsapp}>
                    WHATSAPP
                </Link>
                {
                    width > 1200 && (
                        <Button classes={[style.button]} link={linkSession}>
                            ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                        </Button>
                    )
                }
            </div>
            {
                width < 1200 && (
                    <Button classes={[style.button]} link={linkSession}>
                        ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                    </Button>
                )
            }
        </div>
    );
})

export default Index