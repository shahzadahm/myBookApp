import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/card.json";
import Card from './Card';

const FreeBook = () => {
    const filterData = list.filter((data) => data.category === "free");

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        initialSlide: 0,
        nextArrow: <div className="slick-next" />, // Enable next button
        prevArrow: <div className="slick-prev" />, // Enable prev button
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col  my-10'>
            <div>
                <h1 className='font-bold text-xl pb-2'>Free offered books</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt et nostrum possimus rem. Adipisci, cum sunt et dolore amet dolorum vel nobis maiores sapiente harum iste numquam quisquam aut. Nihil!</p>
            </div>
            <div className='mt-8'>
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default FreeBook;
