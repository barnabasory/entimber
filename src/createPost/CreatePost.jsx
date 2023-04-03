import styles from "./CreatePost.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const initialValues = {
  date: "",
  title: "",
  urlLink: "",
  coverImage: "",
  intro: "",
  mainImage: "",
  subheading1: "",
  description1: "",
  subheading2: "",
  description2: "",
  subheading3: "",
  description3: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  image6: "",
  cta: "",
  video: "",
};

const CreatePost = () => {
  const { posts, setPosts } = useContext(DataContext);
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = {
      id,
      date: values.date,
      title: values.title,
      urlLink: values.urlLink,
      coverImage: values.coverImage,
      intro: values.intro,
      mainImage: values.mainImage,
      subheading1: values.subheading1,
      description1: values.description1,
      subheading2: values.subheading2,
      description2: values.description2,
      subheading3: values.subheading3,
      description3: values.description3,
      image2: values.image2,
      image3: values.image3,
      image4: values.image4,
      image5: values.image5,
      image6: values.image6,
      cta: values.cta,
      video: values.video,
    };
    console.log(newPost);
    const allPosts = [...posts, newPost];
    console.log(allPosts);
    setPosts(allPosts);
    setValues(initialValues);
    navigate("/");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        enctype="multipart/form-data"
      >
        {/* Date */}
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />

        {/* Title */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        {/* Link */}
        <label htmlFor="urlLlink">urlLink</label>
        <input
          type="url"
          name="urlLink"
          value={values.urlLink}
          onChange={handleChange}
        />
        {/* coverImage */}
        <label htmlFor="coverImage">coverImage</label>
        <input
          type="url"
          name="coverImage"
          value={values.coverImage}
          onChange={handleChange}
        />
        {/* intro */}
        <label htmlFor="intro">intro</label>
        <input
          type="text"
          name="intro"
          value={values.intro}
          onChange={handleChange}
        />
        {/* mainImage */}
        <label htmlFor="mainImage">mainImage</label>
        <input
          type="url"
          name="mainImage"
          value={values.mainImage}
          onChange={handleChange}
        />
        {/* subHeading1 */}
        <label htmlFor="subheading1">subheading1</label>
        <input
          type="text"
          name="subheading1"
          value={values.subheading1}
          onChange={handleChange}
        />
        {/* description1 */}
        <label htmlFor="description1">description1</label>
        <textarea
          type="textarea"
          name="description1"
          value={values.description1}
          onChange={handleChange}
        />
        {/* subHeading2 */}
        <label htmlFor="subheading2">subheading2</label>
        <input
          type="text"
          name="subheading2"
          value={values.subheading2}
          onChange={handleChange}
        />
        {/* description2 */}
        <label htmlFor="description2">description2</label>
        <textarea
          type="textarea"
          name="description2"
          value={values.description2}
          onChange={handleChange}
        />
        {/* subHeading3 */}
        <label htmlFor="subheading3">subheading3</label>
        <input
          type="text"
          name="subheading3"
          value={values.subheading3}
          onChange={handleChange}
        />
        {/* description3 */}
        <label htmlFor="description3">description3</label>
        <textarea
          type="textarea"
          name="description3"
          value={values.description3}
          onChange={handleChange}
        />
        {/* image2 */}
        <label htmlFor="image2">image2</label>
        <input
          type="url"
          name="image2"
          value={values.image2}
          onChange={handleChange}
        />
        {/* image3 */}
        <label htmlFor="image3">image3</label>
        <input
          type="url"
          name="image3"
          value={values.image3}
          onChange={handleChange}
        />
        {/* image4 */}
        <label htmlFor="image4">image4</label>
        <input
          type="url"
          name="image4"
          value={values.image4}
          onChange={handleChange}
        />
        {/* image5 */}
        <label htmlFor="image5">image5</label>
        <input
          type="url"
          name="image5"
          value={values.image5}
          onChange={handleChange}
        />
        {/* image6 */}
        <label htmlFor="image6">image6</label>
        <input
          type="url"
          name="image6"
          value={values.image6}
          onChange={handleChange}
        />
        {/* video */}
        <label htmlFor="video">video</label>
        <input
          type="url"
          name="video"
          value={values.video}
          onChange={handleChange}
        />
        {/* video */}
        <label htmlFor="cta">cta</label>
        <input
          type="url"
          name="cta"
          value={values.cta}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
