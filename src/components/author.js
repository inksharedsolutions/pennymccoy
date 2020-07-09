import React from 'react'
import AuthorImg from '../../static/author/author_img.png'


const Author = () =>{
    return(
       <> 
           <section className="hero-page block-wrapper author-section">
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
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s,
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