import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/client-silder.module.css"
import {Typography} from "@material-tailwind/react";

const clients = [
    {
        id: 1,
        name: "adani",
        logo: "./img/adani.png",
    },
    {
        id: 2,
        name: "easyday",
        logo: "./img/easyday.png",
    },
    {
        id: 3,
        name: "Indigo",
        logo: "./img/indigo.png",
    },
    {
        id: 4,
        name: "Ajnara",
        logo: "./img/ajnara.png",
    },
    {
        id: 5,
        name: "spencer's",
        logo: "./img/spencers.png",
    },
    {
        id: 6,
        name: "Liquvid",
        logo: "./img/Liquvid.png",
    },
    {
        id: 7,
        name: "avon",
        logo: "./img/avon.png",
    },
    {
        id: 8,
        name: "bigbazaar",
        logo: "./img/bigbazaar.png",
    },
    {
        id: 9,
        name: "mcdonald's",
        logo: "./img/mcd.png",
    },
    {
        id: 10,
        name: "1mg",
        logo: "./img/1mg.png",
    },
    {
        id: 11,
        name: "tata",
        logo: "./img/tata.png",
    },
];

export const ClientSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="client-slider pt-10">
            <Typography
                variant="h2"
                color="black"
                className="mb-4 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
            >
                Featured clients
            </Typography>
            <Slider {...settings}>
                {clients.map((client) => (
                    <div key={client.id} className="client-slide">
                        <div className="client-image-container">
                            <img src={client.logo} alt={client.name} className="client-image w-2/3 aspect-square object-contain"/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

