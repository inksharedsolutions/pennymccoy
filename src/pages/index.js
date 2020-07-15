import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Fblock from "components/Fblock"
import BookTrailer from "components/book-trailer"
import Author from "components/author"
import Artwork from "components/artwork"
import Button from "components/button"
import Counter from "components/counter"


const IndexPage = () => {

  const [parentState, _pF] = useState(1);


  useEffect(()=>{

  }, parentState , _pF)

  return(
    <Layout mainActivePage={parentState}>
      <Fblock/>
      <BookTrailer activeEl={parentState==2} />
      <Author activeEl={parentState==3} />
      <Artwork activeEl={parentState==4} /> 
      <Button activePage={(num)=> _pF(num) }/>
      <Counter num={parentState} />
    </Layout>
  )
}

export default IndexPage
