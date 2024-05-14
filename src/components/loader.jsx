
import image1 from "../assets/images/simbolo.png"; 
import { motion } from "framer-motion";
import "./loader.css"

const Loader = () => {
return (

    <div className='loader' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <motion.div
        initial={{ scale: 0.5 }} 
        animate={{ scale: [0.5, 1, 0.5] }} 
        transition={{ 
            duration: 2, 
            repeat: Infinity 
        }}
        >
    <img src={image1} alt="loader"  style={{ width: "300px", height: "auto",}}/>

    </motion.div>
    </div>

);
};

export default Loader;