import Head from "next/head";
import Zero from "./components/zero";
import AboutMe from "./components/aboutMe";
import Requests from "./components/Requests";
import TypesSessions from "./components/TypesSessions";
import Prices from "./components/Prices";
import WorkingMethods from "./components/workingMethods";
import Footer from "./components/footer";
import { useEffect, useRef, useState } from "react";

const CatchAllPage = () => {
    const footerRef = useRef(null);
    const [heightFooter, setHeightFooter] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined' && footerRef.current) {
            const height = footerRef.current.clientHeight;
            setHeightFooter(height);
        }
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