import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Playerpage from "./pages/Playerpage";
import Uploadpage from "./pages/Uploadpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/player" element={<Playerpage />} />
          <Route path="/upload" element={<Uploadpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
