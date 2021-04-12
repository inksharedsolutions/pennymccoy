import React from 'react'
import Nav from 'components/navigation'
import { Parallax, Background } from 'react-parallax';
import { DiscussionEmbed } from "disqus-react"
import BookImg from "../../static/books/book_01.png"
import BookInfo from "components/BookInfo/bookinfo"

const ATB = (props)=>{

    const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'penny-mccoy',
	  config: { identifier:  12, slug}
	}
    

    return(
        <>
            <main className="non-front-page">
                <Nav/>
                <section className="banner-section">
                    <Parallax 
                        bgImageAlt="the cat"
                        strength={300}
                        bgImage={require('../../static/banner/web_banner.png')}>
                        
                        <div className="container-gt">
                                <section className="heading-non-front-banner">
                                    <h1>
                                        <span>About the</span>
                                        <span>Book</span>
                                    </h1>
                                </section>
                        </div>

                    </Parallax>
                </section>
                
                <section className="body-contents">
                    <BookInfo  
                        data={{
                            title:`I Am Amidst You Now`,
                            spanTitle: 'God the Father Healing My Truth',
                            imgSrc: BookImg,
                            content:
                            `This book is a compilation of prophetic words, illustrations,
                            and script from the heart of God as our Father to our hearts as His children. 
                             
                            This is the day God’s voice is going to be heard above the voice of evil. 
                            This book salutes the truth that God is not dead but alive with ears that 
                            hear, eyes that see, and power and authority to heal, deliver, and make
                            nations tremble. The intent of I Am Amidst You Now is to be a launching 
                            pad to destiny and freedom`,

                            ebooks:{
                                barnes: 'https://www.barnesandnoble.com/w/from-an-out-house-to-the-white-house-hal-davis/1136867362?ean=9781648950179',
                                amazon:'https://www.amazon.com/Out-House-White-Then-Some-ebook/dp/B0875KQW9Q/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1588017993&sr=8-1', 
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/Out-House-White-Then-Some/dp/1648950159/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1588017993&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/from-an-out-house-to-the-white-house-hal-davis/1136867362?ean=9781648950155',
                                booksamillion:'https://www.booksamillion.com/p/From-Out-House-White/Hal-Davis/9781648950155?id=7714171848832',
                            }
                        }}
                    />
                </section>
                
                <div className="commentSection" >
                    <DiscussionEmbed {...disqusConfig} />
                </div>


            </main>
        </>
    )
}


export default ATB;