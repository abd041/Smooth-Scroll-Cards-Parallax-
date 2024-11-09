import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
