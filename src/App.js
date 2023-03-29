import { Home, PopularDetailsPage } from "./Pages";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
