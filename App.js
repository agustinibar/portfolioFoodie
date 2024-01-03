
import Footer from "./scenes/Footer";
import Navbar from "./scenes/Navbar";
import { Home } from "./views/Landing/Home";
import { NewOne } from "./views/Newsletter/NewOne";
import { NewThree } from "./views/Newsletter/NewThree";
import { NewTwo } from "./views/Newsletter/NewTwo";
import Newsletter from "./views/Newsletter/Newsletter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/new1" element={<NewOne/>}/>
        <Route path="/new2" element={<NewTwo/>}/>
        <Route path="/new3" element={<NewThree/>}/>
      </Routes>
    </>
  );
}

export default App;
