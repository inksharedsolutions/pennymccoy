import React, { useRef, useEffect, useState} from 'react'
import Img from '../../static/meta_img/god_img.png'
import BackdropImg from '../../static/meta_img/ellipse.png'
import { element } from 'prop-types';
import {TweenMax , Power3, TimelineMax, Power4} from 'gsap'



const Fblock = () =>{

    const heroimageRef = useRef(null);


    useEffect(()=>{

        const elemTitle =  heroimageRef.current.querySelectorAll('.big-title')
        const spnItalc =   heroimageRef.current.querySelectorAll('.italic-element span')

        setTimeout(()=>{

            spnItalc.forEach((el, indx) =>{
                setTimeout(()=>{

                    (new TimelineMax)
                    .staggerTo(el , 0.8, {
                        opacity: 1,
                       ease : Power3.out
                    })
    
                },indx * 200)
            })

            elemTitle.forEach((el, indx)=>{
                
                //first block animation
                let fText = el.querySelectorAll('.first-block span')
                let sText = el.querySelectorAll('.second-block span')
                fadeUpLetters(fText)
                fadeUpLetters(sText)

             })

        },1500)
     
    },[])


    function fadeUpLetters (el){
    
       el.forEach((spn, ind)=>{
            setTimeout(()=>{

                (new TimelineMax)
                .staggerTo(spn , 0.8, {
                  position : 'relative',
                  top : '0px',
                  ease : Power3.out
                })

            },ind * 500)
        })
    }
    
     
    return(
        <>
            <section className="hero-page block-wrapper" ref={ heroimageRef }>
                <div className="hero-text-wrapper">
                 
                    <div className="hero-image-wrapper" >
                        <div className="heading-hero-wrapper">
                            
                            <h5 className="italic-element">
                                <span>I</span>
                                <span>a</span>
                                <span>m</span>
                            </h5>

                            <h1 className="big-title">
                                <span className="first-block">
                                    <span>A</span>
                                    <span>m</span>
                                    <span>i</span>
                                </span>

                                <span className="second-block"> 
                                    <span>D</span>
                                    <span>i</span>
                                    <span>s</span>
                                    <span>t</span>
                                </span>
                            </h1>

                            <h5 className="small-title">
                                <span>You</span>
                                <span>Now</span> 
                            </h5>
                            
                        </div>
                        <div className="hero-meta-img">
                            <div className="img-backdrop">
                                <img src={BackdropImg}/>
                            </div>
                            <img src={Img}/>
                        </div>

                    </div>
       
                </div>
            </section>
        </>
    )
}


export default Fblock