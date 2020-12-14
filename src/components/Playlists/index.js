import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PlaylistsInfo from "./PlaylistsInfo"
import {
  PlaylistsContainer,
  PlaylistsWrapper,
  PlaylistsTextWrapper,
  PlaylistsH1,
  PlaylistsP,
} from "./Playlists.styles"

const Playlists = () => {
  const data = useStaticQuery(graphql`
    query {
      allPlaylistsJson {
        edges {
          node {
            title
            reverse
            href
            description
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PlaylistsContainer id="playlists">
      <PlaylistsWrapper>
        <PlaylistsTextWrapper>
          <PlaylistsH1>Playlists.</PlaylistsH1>
          <PlaylistsP>Music that inspires me.</PlaylistsP>
        </PlaylistsTextWrapper>
        {data.allPlaylistsJson.edges.map((item, key) => {
          return <PlaylistsInfo {...item.node} key={key} />
        })}
      </PlaylistsWrapper>
    </PlaylistsContainer>
  )
}

export default Playlists
