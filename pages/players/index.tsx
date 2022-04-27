import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import styles from '../../styles/Players.module.scss'
import IPlayer from "../../types/types";


export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/players`);
    const data : IPlayer[]= await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { players: data },
    }
};

const Players = ({players} : { players: IPlayer[]}) => {
    return (
        <>
            <Head>
                <title>Players</title>
            </Head>
            <Heading text="Players list:" tag={'h3'}/>
            <div className={styles.wrapper}>
                {
                    players.map(({id, firstName, lastName}) => (
                        <Link key={id} href={`/players/${id}`}>
                            <a>{`${id} ${firstName} ${lastName}`}</a>
                        </Link>
                    ))
                }
            </div>

        </>)
};

export default Players;
