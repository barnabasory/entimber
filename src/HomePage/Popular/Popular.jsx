import styles from "./Popular.module.scss";
import data from "./data";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <section className={`sw ${styles.popular_div}`}>
      <div className={styles.title}>
        <h2>What's Popular</h2>
        <span>Popular, evergreen updates and how-to guides.</span>
      </div>
      <div className={styles.cards}>
        {data.map((card) => {
          const { id, coverImage, title } = card;
          return (
            <Link
              to={`/PopularDetailsPage/${id}`}
              key={id}
              className={styles.card}
            >
              <img src={coverImage} alt={title} />
              <span className={styles.card_title}>{title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
