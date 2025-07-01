import style from "./style.module.css"
import cn from "classnames";
import Button from "../ui/Button/Button";
import useWindowWidth from "@/hooks/useWindowWidth";
import { linkSession } from "@/constants";
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";

const Menu = () => {
    const width = useWindowWidth();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && ReactDOM.createPortal(
                <div className={cn(style.container, { [style.hidden]: false })}>
                    <div>
                        <img
                            className={style.arrow}
                            src='/exit.svg'
                        />
                        <div className={style.items}>
                            <a className={cn(style.item, "h2-md")} >Обо мне</a>
                            <a className={cn(style.item, "h2-md")}>С чем работаю</a>
                            <a className={cn(style.item, "h2-md")}>Варианты терапевтической работы</a>
                            <a className={cn(style.item, "h2-md")}>Стоимость</a>
                            <a className={cn(style.item, "h2-md")}>Методы работы</a>
                            <a className={cn(style.item, "h2-md")}>Контакты</a>
                        </div>
                    </div>

                    <div className={style.contacs}>
                        <Button link={linkSession} classes={[style.button, "h2-md"]}>EMAL@GMAIL.COM</Button>
                        <Button link={linkSession} classes={[style.button, "h2-md"]}>TELEGRAM</Button>
                        <Button link={linkSession} classes={[style.button, "h2-md"]}>WHATSAPP</Button>
                        <Button fullWidth={width < 960} link={linkSession}>Записаться на консультацию</Button>
                    </div>
                </div>,
                document.getElementById('dropdown-root')
            )}
        </>
    );
}


export default Menu