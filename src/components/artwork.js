import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* 
=======================
    Images 
=======================
*/
import Book1 from '../../static/artworks/1.jpg'
import Book2 from '../../static/artworks/2.jpg'
import Book3 from '../../static/artworks/3.jpg'
import Book4 from '../../static/artworks/5.jpg'
import Book5 from '../../static/artworks/6.jpg'


const Artwork = ()=>{

    const [mobState, __functState] = useState(false);


    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState,__functState]); 




    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: (mobState) ? 1 : 4,
        slidesToScroll: 1,
    };

    return(
        <>
             <section className="hero-page block-wrapper artwork-contents">
                <div className="container">
                    <div className="artwork-author-content">
                        <div className="col-two-grid-slider-element">

                            <div className="grid-child artwork-content">
                                <h1 className="heading-artwork">
                                    <span>Art</span>
                                    <span>Works</span>
                                    <p>Penny Mccoy</p>
                                </h1>
                            </div>

                            <div className="grid-child artwork-slider">
                                <Slider {...settings}>
                                    <div className="book-wrapper-slider">
                                        <img src={Book1}/>
                                    </div>

                                    <div className="book-wrapper-slider">
                                        <img src={Book2}/>
                                    </div>

                                    <div className="book-wrapper-slider">
                                        <img src={Book3}/>
                                    </div>

                                    <div className="book-wrapper-slider">
                                        <img src={Book4}/>
                                    </div>

                                    <div className="book-wrapper-slider">
                                        <img src={Book5}/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 

export default Artwork