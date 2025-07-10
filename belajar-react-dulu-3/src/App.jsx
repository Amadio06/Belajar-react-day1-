import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/VideoPage";
import Navbar from "./components/Navbar";
import QuizPage from "./Pages/QuizPage";


function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



