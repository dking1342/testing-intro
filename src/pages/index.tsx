import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Counter from "../components/Counter/Counter";
import Photos from "../components/Photos/Photos";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <Counter description="" defaultCount={0} /> */}
        <Photos />
      </main>
    </div>
  );
};

export default Home;
