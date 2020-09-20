import React from "react"
import Layout from "../components/layout"
import Jumbo from "../components/jumbotron"
import About from "../components/about"
import Feed from "../components/feed"

const IndexPage = () =>{
  return (
    <Layout>
      <Jumbo/>
      <About/>
      <Feed/>
    </Layout>
  )
}

export default IndexPage;