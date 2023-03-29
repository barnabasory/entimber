import styles from "./PopularMain.module.scss";
import data from "../../HomePage/Popular/data";
import { useParams, Link } from "react-router-dom";

const PopularMain = () => {
  const { id } = useParams();

  const passedData = [data.find((item) => item.id.toString() === id)];

  return (
    <div className={`sw ${styles.main}`}>
      {passedData?.map((item) => {
        const {
          id,
          date,
          title,
          intro,
          mainImage,
          description1,
          description2,
          description3,
          subheading1,
          subheading2,
          subheading3,
          image2,
          image3,
          image4,
          image5,
          image6,
          video,
          cta,
        } = item;

        return (
          <article key={id} className={styles.article}>
            <Link to="/">Home </Link>
            <div className={styles.date_title}>
              <span className={styles.date}>{date}</span>
              <span className={styles.title}>{title}</span>
            </div>
            <a
              href="https://warriorplus.com/o2/a/hb8prl/0"
              className={styles.intro}
            >
              {intro}
            </a>
            <img src={mainImage} alt={title} />
            <div className={styles.first_subheading}>
              <a
                href="https://warriorplus.com/o2/a/hb8prl/0"
                className={styles.subheading1}
              >
                {subheading1}
              </a>
              <p className={styles.description1}>{description1}</p>
            </div>
            <div className={styles.second_subheading}>
              <a
                href="https://warriorplus.com/o2/a/hb8prl/0"
                className={styles.subheading2}
              >
                {subheading2}
              </a>
              <p className={styles.description2}>{description2}</p>
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <Link to="https://warriorplus.com/o2/a/hb8prl/0">
                <button className={styles.button1}>{cta}</button>
              </Link>
            </div>

            <div className={styles.third_subheading}>
              <a
                href="https://warriorplus.com/o2/a/hb8prl/0"
                className={styles.subheading3}
              >
                {subheading3}
              </a>
              <p className={styles.description3}>{description3}</p>
            </div>
            <img src={image5} alt="" className={styles.image5} />
            <img src={image6} alt="" className={styles.image6} />
            <iframe src={video} frameborder="0"></iframe>
            <Link to="https://warriorplus.com/o2/a/hb8prl/0">
              <button className={styles.button2}>{cta}</button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default PopularMain;
