import { useEffect, useState } from "react";
import style from "./style.module.css"
import cn from "classnames";

function WorkingMethod({ setIsOpen, isOpen, name, text, hashtags = [], type = "" }) {
    const [paddingStyle, setPaddingStyle] = useState(null);

    useEffect(() => {
        if (type === "supervision") {
            setPaddingStyle({ padding: "40px var(--page-margins-x)" });
        }
    }, [type]);

    return (
        <div onClick={setIsOpen} className={cn(style.nameWorkingMethodWrapper, "h4-md")}>
            <div style={paddingStyle} className={cn(style.nameWorkingMethod, { [style.blockHover]: isOpen }, "h4-md")}>
                <span>{name}</span>
                <img src="/arrowBrown.svg" className={cn([!isOpen && style.open])} />
                <div className={style.hidingBlock}></div>
            </div>

            <div
                className={cn(style.workingMethodDescription,
                    { [style.nameWorkingMethodSupervision]: type === "supervision" },
                    "text1"
                )}
                style={{ maxHeight: isOpen ? "400px" : "0px", }}>

                {
                    type !== "supervision" &&
                    <>
                        <div>
                            {text}
                        </div>
                        <div className={cn("h5-md", style.hashtags)}>
                            {hashtags.map((hashtag) => (
                                <span key={hashtag}>// {hashtag}</span>
                            ))}
                        </div>
                    </>
                }
                {
                    type === "supervision" &&
                    hashtags.map((title) => (
                        <div key={title.name} className={cn("h5-md", style.hashtags, style.supervision)}>
                            <span>// {title.name}</span>
                            <div className="text1">
                                {title.textTitle}
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default WorkingMethod