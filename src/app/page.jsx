import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Home</h1>
      </div>
      <iframe
  width="600"
  height="450"
  style={{margin:'2rem'}}
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Bkj-sEFNAGMYAfKM_0FxX9UB8Eb-vDg
    &q=Space+Needle,Seattle+WA">
</iframe>
     
    </main>
  );
}
