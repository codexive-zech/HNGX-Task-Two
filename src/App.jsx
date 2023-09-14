import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovies from "./pages/SingleMovies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
