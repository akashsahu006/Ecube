import { BrowserRouter, Routes,Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUsPage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
