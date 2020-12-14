import React from "react"
import Layout from "../components/layout"
import Playlists from "../components/Playlists"
import SEO from "../components/seo"

const PlaylistPage = () => {
  return (
    <Layout>
      <SEO title="Playlists" />
      <Playlists />
    </Layout>
  )
}

export default PlaylistPage
