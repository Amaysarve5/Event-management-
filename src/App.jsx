import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Example product detail page
const ProductDetail = ({ id }) => {
  return <h2 className="p-4 text-xl">Product Details for ID: {id}</h2>;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
