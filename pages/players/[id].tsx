import Head from "next/head";
import Heading from "../../components/Heading";
import IPlayer from "../../types/types";

export const getStaticPaths = async () => {
    const response = await fetch(`${process.env.API_HOST}/players`);
    const data: IPlayer[] = await response.json();
    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false,
    }
};

interface Icontext {
    params: {
        id: string,
    }
}


export const getStaticProps = async (context: Icontext) => {
    const { id } = context.params;
    const response = await fetch(`${process.env.API_HOST}/players`);
    const data: IPlayer[] = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    const player = data.find(item => item.id === id);

    return {
        props: { player },
    }
};

const Player = ({player} : {player: IPlayer}) => {
    return (
        <>
            <Head>
                <title>{player.firstName}</title>
            </Head>
            <Heading text="Player info:"/>
            <div>{player.firstName}</div>
            <div>{player.lastName}</div>
            <div>{player.age}</div>
            <div>{player.position}</div>
            <div>Skills: <ul>{player.skills.map( item => <li key={item}>{item}</li>)}</ul></div>
        </>)
};

export default Player;
