import styles from "./PopularMain.module.scss";
import { useParams, Link } from "react-router-dom";
import {
  BsFillArrowUpRightCircleFill,
  BsArrowLeftSquare,
} from "react-icons/bs";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const PopularMain = () => {
  const { id } = useParams();

  const { posts } = useContext(DataContext);

  const passedData = posts.find((item) => item.id.toString() === id);

  return (
    <div className={`sw ${styles.main}`}>
      {passedData && (
        <section
          className={`fw ${styles.article_container}`}
          key={passedData.id}
        >
          <div className={`sw ${styles.article_div}`}>
            {/* back home */}
            <Link to="/" className={styles.home}>
              <BsArrowLeftSquare />
              Home
            </Link>
            <article key={id} className={styles.article}>
              {/* date and title */}
              <div className={styles.date_title}>
                <span className={styles.date}>{passedData.date}</span>
                <span className={styles.title}>{passedData.title} </span>
              </div>
              {/* intro */}
              <a href={passedData.urlLink} className={styles.intro}>
                {passedData.intro}
              </a>
              {/* main Image */}
              <img
                src={passedData.mainImage}
                alt={passedData.title}
                className={styles.main_image}
              />
              {/* first heading */}
              <div className={styles.first_subheading}>
                <a href={passedData.urlLink} className={styles.subheading1}>
                  {passedData.subheading1}
                  <BsFillArrowUpRightCircleFill
                    className={styles.arrow_upright}
                  />
                </a>
                <p className={styles.description1}>{passedData.description1}</p>
              </div>
              {/* second heading */}
              <div className={styles.second_subheading}>
                <a href={passedData.urlLink} className={styles.subheading2}>
                  {passedData.subheading2}
                  <BsFillArrowUpRightCircleFill
                    className={styles.arrow_upright}
                  />
                </a>
                <p className={styles.description2}>{passedData.description2}</p>
              </div>
              {/* second and third image */}
              <div className={styles.image2_3}>
                <img
                  src={passedData.image2}
                  alt=""
                  className={styles.image_2}
                />
                <img
                  src={passedData.image3}
                  alt=""
                  className={styles.image_3}
                />
              </div>
              {/* third heading */}
              <div className={styles.third_subheading}>
                <a href={passedData.urlLink} className={styles.subheading3}>
                  {passedData.subheading3}
                </a>
                <p className={styles.description3}>{passedData.description3}</p>
              </div>
              {/* fourth and fifth image */}
              <div className={styles.image4_5}>
                <img
                  src={passedData.image4}
                  alt={passedData.title}
                  className={styles.image_4}
                />
                <img
                  src={passedData.image5}
                  alt={passedData.title}
                  className={styles.image_5}
                />
              </div>
              {/* button 1 */}
              <Link to={passedData.urlLink}>
                <button className={styles.button1}>
                  {passedData.cta}{" "}
                  <BsFillArrowUpRightCircleFill
                    className={styles.arrow_upright}
                  />
                </button>
              </Link>
              {/* image6 and video */}
              <div className={styles.image6_video}>
                <img src={passedData.image6} alt="" className={styles.image6} />
                <iframe
                  src={passedData.video}
                  frameborder="0"
                  className={styles.video}
                  title={passedData.video}
                ></iframe>
              </div>
              {/* button 2 */}
              <Link to={passedData.urlLink}>
                <button className={styles.button2}>
                  {passedData.cta}
                  <BsFillArrowUpRightCircleFill
                    className={styles.arrow_upright}
                  />
                </button>
              </Link>
            </article>
          </div>
        </section>
      )}
    </div>
  );
};

export default PopularMain;
