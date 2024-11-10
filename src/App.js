import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import { Inner } from "./components/animation/Inner";

function App() {
  const location = useLocation();

  return (
    <>
    
      <AnimatePresence mode="wait">
        
        <Header/>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Inner><HomePage /></Inner>} />
          <Route path="/about" element={<Inner><About /></Inner>} />
          <Route path="/contact" element={<Inner><Contact /></Inner>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
