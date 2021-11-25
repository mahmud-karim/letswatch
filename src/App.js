import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Playerpage from "./pages/Playerpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/player" element={<Playerpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
