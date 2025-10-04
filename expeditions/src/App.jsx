import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationPage";
import DestinationDetails from "./components/DestinationDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}