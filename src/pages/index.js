import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Fblock from "components/Fblock"
import BookTrailer from "components/book-trailer"
import Author from "components/author"
import Artwork from "components/artwork"

const IndexPage = () => (
  <Layout>

    <Fblock/>
    <BookTrailer/>
    <Author/>
    <Artwork/>

  </Layout>
)

export default IndexPage
