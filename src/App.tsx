import { Routes, Route } from "react-router";
import CCTV from "./pages/CCTV";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CCTV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
