
import "./contacto.css";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    export const Contacto = () => {
    const form = useRef();
    const notify = () => toast.success("¡Su consulta ha sido enviada!");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_jsbhj2c', 'template_ncnlt7f', form.current, {
            publicKey: '3Aon3ElzUvco9EjAq',
        })
        .then(
            () => {
            console.log("Correo enviado");
            form.current.reset();
            },
            (error) => {
            console.log('Error en el envio', error.text);
            },
        );
    };

    return (
        <section className="container-contacto">
            <h1> Contacto </h1>
            <p className="contact">Podes escribirme tambien a pablomrisi@hotmail.com para realizar alguna consulta sobre un proyecto que tengas en mente.  </p>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="ingrese su nombre" name="user_name" />
            <input type="email"  placeholder="ingrese su correo electronico" name="user_email" />
            <textarea type="text" cols="30" rows="10" placeholder="mensaje" name="message" />
            <button onClick={notify} className="enviar"  type="submit" value="Send" > Enviar </button>
            <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    />
            </form>
        </section>
    );
}