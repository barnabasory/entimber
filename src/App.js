import { Home, PopularDetailsPage, CreatePost } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/PopularDetailsPage/:id"
            element={<PopularDetailsPage />}
          />
          <Route exact path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
