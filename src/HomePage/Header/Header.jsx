import styles from "./Header.module.scss";

const Header = () => {
  return (
    <section className={`fw ${styles.header_container}`}>
      <div className={`sw ${styles.header_content}`}>
        <span className={styles.logo}>entimber.</span>
        <nav className={styles.navlinks}>
          <ul>
            <li>Ecommerce</li>
            <li>Health</li>
            <li>Beauty</li>
            <li>Finance</li>
            <li>Blogging</li>
            <li>Digital Marketing</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
