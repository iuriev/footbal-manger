import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import styles from '../../styles/Players.module.scss'

export const playersData = [
    {id: '1', firstName: 'Alexxxxxxxxxxxx', lastName: 'Lowson', age: 12, position: 'striker', skills: []},
    {id: '2', firstName: 'Sam', lastName: 'Jameson', age: 13, position: 'defender', skills: []},
    {id: '3', firstName: 'Jack', lastName: 'Gadner', age: 12, position: 'midfielder', skills: []},
];

export const getStaticProps = async () => {
    return {
        props: {
            players: playersData,
        },
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
