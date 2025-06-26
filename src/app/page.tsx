import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main} >
      <main>
        <h1>tmwgc.</h1>
        <h4>Personal Brand Network</h4>
        <b>Wikipedia of Influential Personal Brands of India</b>
      </main>
      <button>Search Brands</button>
    </div>
  );
}
