import Head from "next/head";
import Zero from "./components/zero";
import AboutMe from "./components/aboutMe";
import Requests from "./components/Requests";
import TypesSessions from "./components/TypesSessions";
import Prices from "./components/Prices";
import WorkingMethods from "./components/workingMethods";
import Footer from "./components/footer";

const CatchAllPage = () => {
    return (
        <>
            <Head>
                <title>Психология</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Zero />
                <AboutMe />
                <Requests />
                <TypesSessions />
                <Prices />
                <WorkingMethods />
                <Footer />
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