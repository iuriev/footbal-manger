import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application for Football Managers" />
  </div>
);

export default Home;
