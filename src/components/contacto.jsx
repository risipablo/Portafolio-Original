
import "./contacto.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contacto = () => {

    const { register, handleSubmit} = useForm();
    const notify = () => toast("Wow so easy!");

    const enviar = (data) => {
        console.log(data);
    }

    return(
        <section className="container-contacto">
            <h1> Contacto </h1>
            <form className="form" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="ingrese su nombre" {...register("nombre")} ></input>
                <input type="email" placeholder="ingrese su correo electronico" {...register("correo")} ></input>
                <textarea type="text" cols="30" rows="10" placeholder="mensaje" {...register("mensaje")} ></textarea>
                <button  onClick={notify} className="enviar" type="submit"> Enviar </button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
            </form>
        </section>
    )
}