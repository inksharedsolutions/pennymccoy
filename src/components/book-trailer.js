import React, {useEffect, useState} from 'react';
import BookTrailer  from '../../static/video/book_trailer.mp4'

import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

const BookTrailerComponents = () =>{
    
    const [state, __func] = useState(false);

    useEffect(()=>{ 

        if(typeof(window) !== 'window' ||  typeof(window) === 'object'){
            __func(true);
        }

    },[state, __func])

    return(
        <>
            <section className="hero-page block-wrapper section-book-trailer">
                <div className="container">
                    <div className="section-parent-book-trailer">
                        <div className="col-two-grid-element">
                            <div className="grid-child heading-trailer">
                                <h1> Book Trailer</h1>
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