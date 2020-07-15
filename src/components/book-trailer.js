import React, {useEffect, useState, useRef} from 'react';
import BookTrailer  from '../../static/video/book_trailer.mp4'

import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

const BookTrailerComponents = (props) =>{
    
    const [state, __func] = useState(false);
    const action =  useRef(null);
    const mounted = useRef();

    /*Before mount...*/
    useEffect(()=>{ 
        let isSubscribe = true;
        if(typeof(window) !== 'window' ||  typeof(window) === 'object'){
            __func(true);    
        }

        /* check if has a active-page class */
        // const isActive = action.current;
        // console.log(isActive.classList[3] ==='active-page');
        

        if(props.activeEl ){
            console.log(props.activeEl);
        }
        
        
        return ()=> isSubscribe =false

    },[[action,state] ,__func])


    /*After mount...*/




    return(
        <>
            <section className="hero-page block-wrapper section-book-trailer" ref={action}>
                
                {
                    props.activeEl && ( 
                        <div className="linear-width"></div>
                    )
                }
               
                <div className="container">
                    <div className="section-parent-book-trailer">
                        <div className="col-two-grid-element">
                            <div className="grid-child heading-trailer">
                                
                                <h1 className="big-heading-trailer"> 
                                    <span>Book</span>
                                    <span>Trailer</span>
                                </h1>

                                <p>

                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s,

                                </p>
                            </div>
                            <div className="grid-child">

                                {
                                    state && (
                                        <Player width="600px">
                                            <source 
                                                src={BookTrailer} />
                                        </Player>
                                    )
                                }
                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default BookTrailerComponents