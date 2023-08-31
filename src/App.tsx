import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CustomMath from "./components/CustomMath";
import Home from "./components/Home";
import NoPage from './components/NoPage';
import FetchData from './components/FetchData';
import LinkToTop from './LinkToTop';

function App() {

  return (
    <Router>
      <LinkToTop />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"custom_math"} element={<CustomMath />} />
        <Route path="/fetch_data" element={<FetchData />} />
        <Route path="/shop" element={<CustomMath />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;