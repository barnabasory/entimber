import { Header, Hero, NewsLetter, Popular } from "../Pages";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Header />
      <Hero />
      <NewsLetter />
      <Popular />
    </div>
  );
};

export default Home;
