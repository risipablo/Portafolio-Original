import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./components/inicio";
import { Info } from "./components/info";
import { Contacto } from "./components/contacto";
import { Proyectos } from "./components/proyectos";
import { useEffect, useState } from "react";
import Loader from "./components/loader"


function App() {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),3000)
    return () => setTimeout(timer)
  })
  return (

    <>
        { loading ? (
    <Loader/> 
    ) : (
      <BrowserRouter>
      <Navbar setLoading={setLoading}/>
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobremi" element={<Info />} /> 
        <Route path="/proyectos" element={<Proyectos />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
      </Routes>
      </BrowserRouter>
    )}
    </>
    
  );
}

export default App;
