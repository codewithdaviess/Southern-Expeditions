import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future pages */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/blogs" element={<Blog />} /> */}
        {/* <Route path="/itinerary" element={<Itinerary />} /> */}
      </Routes>
    </Router>
  );
}
