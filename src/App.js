import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState(false);
  return (
    
      <div className={mode ? "dark" : "light"}>
        <Navbar mode={mode} setmode={setmode} />
        <Routes>
          <Route path="/" element={<Input />} />
        </Routes>
      </div>
  
  );
}

export default App;
