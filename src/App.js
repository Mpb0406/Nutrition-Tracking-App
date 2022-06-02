import FoodSearch from "./Pages/FoodSearch";
import { Container } from "react-bootstrap";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Container className="p-3">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<FoodSearch />} />
          {/* <h1>Nutrition Tracker</h1>
      <FoodSearch /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
