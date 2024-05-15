import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slider.css";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/game.jpg";
import image3 from "../assets/images/lista.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SimpleSlider = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const settings = {
        dots: false,
        arrows: true, 
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true, 
        // autoplaySpeed: 4000, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    const exps = [
        {src: image1, titulo: "Listado Oficial"},
        {src: image2, titulo: "Multiple Choice"},
        {src: image3, titulo: "Casa Vita"}
    ];

    return (
        <Slider {...settings} className='general'>
            {exps.map((exp, indice) => (
                <div key={indice} data-aos="fade-left" data-aos-offset="0">
                    <img src={exp.src} alt="" />
                    <p style={{textAlign: "center", margin: "1rem 0", fontSize: "1.4rem", fontWeight: "600"}}>{exp.titulo}</p>
                </div>
            ))}
        </Slider>
    );
};

export default SimpleSlider;
