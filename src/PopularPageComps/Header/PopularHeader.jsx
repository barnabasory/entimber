import styles from "./PopularHeader.module.scss";

const PopularHeader = () => {
  return (
    <div className={`fw ${styles.header}`}>
      <ul className={`sw ${styles.links}`}>
        <li>Contact Us</li>
        <li>Subscribe to Our NewsLetter</li>
        <li>Save More</li>
        <li>Where We Featured</li>
        <li>Latest Gists</li>
      </ul>
    </div>
  );
};

export default PopularHeader;
