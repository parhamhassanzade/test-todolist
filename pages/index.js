import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Layout from "../component/Layout";
export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Welcome</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="#">ToDoApp</a>
          </h1>
          <h3>what is your main focus for today?</h3>

          <h5>
            <Typography variant="button" gutterBottom>
              <Link href="/Todo"> list them here</Link>
            </Typography>
          </h5>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/parhamhassanzade"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by {"<Parham Hassanzade />"}
          </a>
        </footer>
      </div>
    </Layout>
  );
}
