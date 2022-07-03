import styles from "../styles/herobanner.module.css";

export const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <label>LOREM IPSUM</label>
        <h1>Lorem ipsum amet consectetur adipiscing elit.</h1>
        <p>
          Opperation Morraba was a secretly launched mission with one specific
          goal in mind: finding the safe house four fugitives are using to hide
          from the authorities.
        </p>
      </div>
      </div>
    </section>
  );
};
