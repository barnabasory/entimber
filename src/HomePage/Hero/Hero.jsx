import styles from "./Hero.module.scss";
import cards from "./data";
import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  return (
    <section className={`sw ${styles.hero_div}`}>
      <h1 className={styles.hero}>
        We Help Users Succeed in their Purchasing Economy
      </h1>
      <div className={styles.hero_cards}>
        {cards.map((card) => (
          <div className={styles.hero_card} key={card.id}>
            <img src={card.image} alt="" />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
