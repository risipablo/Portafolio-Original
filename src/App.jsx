import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./components/inicio";
import { Info } from "./components/info";
import { Contacto } from "./components/contacto";
import { Proyectos } from "./components/proyectos";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobremi" element={<Info />} /> 
        <Route path="/proyectos" element={<Proyectos />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
