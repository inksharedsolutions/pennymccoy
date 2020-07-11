import React from 'react'
import Nav from 'components/navigation'
import { Parallax, Background } from 'react-parallax';

const ATB = ()=>{

    return(
        <>

            <Nav/>
            <section className="banner-section">
                <Parallax 
                    bgImageAlt="the cat"
                    strength={300}
                    bgImage={require('../../static/banner/web_banner.png')}
                    >
                        <div className="container-gt">
                            <div className="grid-two-columns" id="banner-layout-responsive">
                                
                                <div className="left-col">

                                </div>

                                <div className="right-col banner-text">
                                        <h1 className="heading-banner-fs fontHeading">
                                            <span>A St. Louis</span>
                                            <span>Love Story</span>
                                        </h1>

                                        <span className="meta-spanline">
                                            The Dreamwatcher Diaries
                                        </span>
                                </div>
                            </div>
                        </div>
                </Parallax>
            </section>
           
        </>
    )
}


export default ATB;