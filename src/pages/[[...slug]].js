import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Zero from "./components/zero";
import AboutMe from "./components/aboutMe";
import Requests from "./components/Requests";
import TypesSessions from "./components/TypesSessions";
import Prices from "./components/Prices";
import WorkingMethods from "./components/workingMethods";
import Footer from "./components/footer";
import Menu from "./components/menu";

// TODO сделать файл index в компонентах, что бы из него тянулись все компоненты без этих сосисок в импортах

const CatchAllPage = () => {
    const footerRef = useRef(null);
    const [heightFooter, setHeightFooter] = useState(0);

    useEffect(() => {
        const onLoad = () => {
            if (footerRef.current) {
                setHeightFooter(footerRef.current.clientHeight);
            }
        };

        if (document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad);
        }

        return () => {
            window.removeEventListener('load', onLoad);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Психология</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <div style={{ position: "sticky", zIndex: 2, marginBottom: heightFooter }}>
                    <Zero />
                    <Menu />
                    <AboutMe />
                    <Requests />
                    <TypesSessions />
                    <Prices />
                    <WorkingMethods />
                </div>
                <Footer ref={footerRef} />
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export default CatchAllPage;