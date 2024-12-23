import style from "./style.module.css"
import cn from "classnames";
import Button from "../ui/Button/Button";
import useWindowWidth from "@/hooks/useWindowWidth";
import { linkSession } from "@/constants";

const Index = () => {
    const isMobile = useWindowWidth() <= 960;

    return (
        <div className={style.container}>
            <div className={style.containerImg}>
                <img className={style.img} src="/natalia.jpg" alt="Kuzina Natalia" />
            </div>
            <div className={cn(style.secondContainerBlock)}>
                <div>
                    <h1 className="h1-sm">
                        <div style={{ overflow: "hidden" }}>
                            <p className={style.wordAnimation}>
                                Клинический
                            </p>
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <p className={style.wordAnimation} style={{ marginLeft: "14px" }}>
                                психолог-супервизор
                            </p>
                        </div>
                        <p className={cn(style.name, "h5-md")}>
                        // кузина Наталья
                        </p>
                    </h1>
                    <div className={style.allContent}>
                        <div className={style.descripton}>
                            <p className="text1">
                                В работе придерживаюсь Этического кодекса Коллегии по этике психологов и психотерапевтов (КЭПП)
                            </p>
                            <p className="text1">
                                Член Ассоциации специалистов в сфере контекстуально-поведенческой науки (АКПН)
                            </p>
                        </div>
                        <Button link={linkSession} fullWidth={isMobile} classes={[style.button]}>
                            записаться на консультацию
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index