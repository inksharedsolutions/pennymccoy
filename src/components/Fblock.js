import React from 'react'
import Img from '../../static/meta_img/god_img.png'
import BackdropImg from '../../static/meta_img/ellipse.png'

const Fblock = () =>{
    return(
        <>
            <section className="hero-page block-wrapper">
                <div className="hero-text-wrapper">
                 
                    
                    <div className="hero-image-wrapper">
                        <div className="heading-hero-wrapper">
                            <h5 className="italic-element">Iam</h5>
                            <h1 className="big-title">
                                <span>Ami</span>
                                <span>Dist</span>
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