import React from "react"
import Nav from 'components/navigation'
import AuthorImg from '../../static/author/author_thumbnail.jpg'
import { Parallax, Background } from 'react-parallax';

const ABA = (props)=>{

     return(
         <>
            <main className="non-front-page">
                <Nav/>
                <section className="banner-section">
                    <Parallax 
                        bgImageAlt="the cat"
                        strength={300}
                        bgImage={require('../../static/banner/web_banner.png')}
                        >
                            <div className="container-gt">
                                <section className="heading-non-front-banner">
                                    <h1>
                                        <span>About the</span>
                                        <span>Author</span>
                                    </h1>
                                </section>
                            </div>
                    </Parallax>
                </section>
                 
                <section className="section-author">
                    <div className="container">
                        <div className="grid-whole">

                            <div className="author-img-bubble">
                                <img src={AuthorImg}/>
                            </div>
                
                            <div className="child-grid">
                                <div className="author-content-wraps">

                                     <h1 className="backdrop-heading">
                                        <span>Author</span>
                                         <span>quote</span>
                                     </h1>

                                     <h1>
                                         <p className="author-quote">
                                            “is simply dummy text of the printing and typesetting industry,
                                            eart must identify with struggle and fully grasp the reality of 
                                            tireless work when the crowds aren’t cheering,”
                                        </p>
                                     </h1>

                                    <p>
                                        I was raised by my parents Dave and Roma McCoy. 
                                        I grew up and worked with our family business, 
                                        in the Mammoth Mountain Ski Area in a pioneering
                                        atmosphere that innately knows that champions are 
                                        born as well as nurtured.
                                    </p>
                                    

                                    <p>
                                        My genetic make-up predisposed me to greatness pouring 
                                        into every cell of my being a revelation that a visionary’s
                                        unfailing heart must identify with struggle and fully grasp
                                        the reality of tireless work when the crowds aren’t cheering, 
                                        banners aren’t waving and when the winds of misunderstanding 
                                        and mockery blew upon the sails of my destiny.
                                    </p>

                                    <p>
                                        I was a world champion skier at the age of sixteen. 
                                        Life soon became a puzzle framed within the throes 
                                        of stardom as well as cast in the mud. I won and lost, 
                                        failed and succeeded, been on top in world championship 
                                        exaltation and plummeted to the depths of political Olympic 
                                        embarrassment, humility, despair and confusion. I have been 
                                        a star and a princess only to become and ugly duckling. 
                                        I have tasted the joy of victory and the bitterness 
                                        of defeat through all the shame, guilt and brokenness of life. 
                                        The amazing thing is all this led to opportunity for victory, 
                                        freedom, healing and purpose. It was up to me to choose. 
                                        It is my desire to use this label as an opportunity to fuel 
                                        each and every one of you with the hope of this same sort of 
                                        opportunity.
                                    </p>


                                    <p className="author-name">
                                        <span className="f-name">Penny</span>
                                        <span className="s-name italic-element ata-font">Mccoy</span>
                                        <span className="tag-author">Author & Writer</span>
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
         </>
     )
}

export default ABA;