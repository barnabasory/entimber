import styles from "./NewsLetter.module.scss";
import { device } from "../../Pages";

const NewsLetter = () => {
  return (
    <section className={`sw ${styles.newsletter_div}`}>
      <span>Explore while you're away!</span>
      <div className={styles.cta_div}>
        <img src={device} alt="" />
        <div className={styles.cta}>
          <h3>SURF,</h3>
          <h4>LEARN,</h4>
          <h5>GROW</h5>
          <ul>
            <li>UPDATED INFORMATION AT YOUR REQUEST</li>
            <li>BEST ALTERNATIVES FOR YOUR FAMILY</li>
            <li>WORLD'S REVIEW ON YOUR FINANCES</li>
            <li>SAVING MORE EVERYDAY</li>
            <li>PLUS MANY MORE.....</li>
          </ul>
          <button>Subscribe to Our NewsLetter</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
