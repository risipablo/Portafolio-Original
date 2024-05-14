
import "./contacto.css";
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    export const Contacto = () => {
    const form = useRef();
    const [isFormValid, setIsValid] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const notifySucces = () => toast.success("¡Su consulta ha sido enviada!");
    const notifyError = () => toast.error("Por favor complete todos los campos del formulario.");

    const sendEmail = (e) => {
        e.preventDefault();

        if(isFormValid && !isEmailSent){
            emailjs
            .sendForm('service_jsbhj2c', 'template_ncnlt7f', form.current, {
                publicKey: '3Aon3ElzUvco9EjAq',
            })
            .then(
                () => {
                console.log("Correo enviado");
                form.current.reset();
                notifySucces();
                setIsEmailSent(true);
                },
                (error) => {
                console.log('Error en el envio', error.text);
                },
            );
        } else {
            notifyError("Por favor complete todos los campos del formulario.");
        }
    };

    const handleInput = () => {
        //verrificar estados del form
    const inputs = form.current.querySelectorAll("input,textarea");
    let isValid = true;

    inputs.forEach(input => {
        if(!input.value.trim()) {
            isValid=true;
        }
    });
        setIsValid(isValid); // llamamos al segundo estado
    }

    return (
        <section className="container-contacto">
            <h1> Contacto </h1>
            <p className="contact">Podes escribirme tambien a <a>pablomrisi@hotmail.com</a> para realizar alguna consulta sobre un proyecto que tengas en mente.  </p>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="ingrese su nombre" name="user_name"  onChange={handleInput}/>
            <input type="email"  placeholder="ingrese su correo electronico" name="user_email" onChange={handleInput}/>
            <textarea type="text" cols="30" rows="10" placeholder="mensaje" name="message" onChange={handleInput} />
            <button  className="enviar"  type="submit" value="Send" > Enviar </button>
            <ToastContainer
                    position="top-center"
                    autoClose={3000}
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