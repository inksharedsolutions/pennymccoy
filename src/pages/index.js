import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Fblock from "components/Fblock"
import BookTrailer from "components/book-trailer"
import Author from "components/author"
import Artwork from "components/artwork"
import Button from "components/button"

const IndexPage = () => {

  return(
    <Layout>
      <Fblock/>
      <BookTrailer/>
      <Author/>
      <Artwork/>
      <Button />
    </Layout>
  )
}

export default IndexPage
