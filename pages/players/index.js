import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import styles from '../../styles/Players.module.scss'


export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/players`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { players: data },
    }
};

const Players = ({players}) => {
    return (
        <>
            <Head>
                <title>Players</title>
            </Head>
            <Heading text="Players list:"/>
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
