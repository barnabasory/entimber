import styles from "./Popular.module.scss";
import data from "./data";

const Popular = () => {
  return (
    <section className={styles.popular_div}>
      <div className={styles.title}>
        <h2>What's Popular</h2>
        <span>Popular, evergreen updates and how-to guides.</span>
      </div>
      <div className={styles.cards}>
        {data.map((card) => {
          const { id, coverImage, title } = card;
          return (
            <div className={styles.card} key={id}>
              <img src={coverImage} alt={title} />
              <span className={styles.card_title}>{title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
