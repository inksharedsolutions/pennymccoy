import React from 'react'
import AuthorImg from '../../static/author/author_img.png'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Author = (props) =>{
    return(
       <> 
           <section className="hero-page block-wrapper author-section">

                {
                    props.activeEl && ( 
                        <div className="linear-width-author-sect"></div>
                    )
                }


                <div className="container">
                    <div className="section-author-content">
                        <div className="col-two-grid-element">

                            <div className="grid-child ">
                                <div className="author-wrapper">
                                    <img src={AuthorImg} />
                                </div>
                            </div>

                            <div className="grid-child author-content">
                                <h1>
                                     About the
                                    <span>Author</span>
                                </h1>

                                <p>
                                    I was raised by my parents Dave and Roma McCoy. 
                                    I grew up and worked with our family business, 
                                    in the Mammoth Mountain Ski Area in a pioneering 
                                    atmosphere that innately knows that champions are born 
                                    as well as nurtured.
                                </p>

                                <p className="author-name">
                                    <span className="f-name">Penny</span>
                                    <span className="s-name italic-element">Mccoy</span>
                                    <span className="tag-author">Author & Writer</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </> 
    )
}


export default Author