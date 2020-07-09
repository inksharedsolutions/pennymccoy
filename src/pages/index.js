import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Fblock from "components/Fblock"
import BookTrailer from "components/book-trailer"
import Author from "components/author"
import Artwork from "components/artwork"
import Button from "components/button"

const IndexPage = () => {

  const [parentState, _pF] = useState(1);


  useEffect(()=>{


  }, parentState , _pF)

  return(
    <Layout mainActivePage={parentState}>
      <Fblock/>
      <BookTrailer/>
      <Author/>
      <Artwork/>
      <Button activePage={(num)=> _pF(num) }/>
    </Layout>
  )
}

export default IndexPage
