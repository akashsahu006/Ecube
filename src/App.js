import { BrowserRouter, Routes,Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Testing from "./pages/Testing";


function App() {
  return (
    <>
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUsPage/>}/>
        <Route path="/testing" element={<Testing/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
