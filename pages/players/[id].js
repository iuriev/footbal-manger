import Head from "next/head";
import Heading from "../../components/Heading";
import { useRouter } from "next/router";
import { playersData } from "./index";

export const getStaticPaths = async () => {
    const paths = playersData.map(({ id }) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const player = playersData.find(item => item.id === id);

    return {
        props: { player },
    }
};

const Player = ({player}) => {
    return (
        <>
            <Head>
                <title>{player.firstName}</title>
            </Head>
            <Heading text="Player info:"/>
            <div>{player.firstName}</div>
            <div>{player.firstName}</div>
        </>)
};

export default Player;
