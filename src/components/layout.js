/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { Menu, MenuItem } from "../components/Menu"
import { SocialMediaMenu } from "../components/SocialMediaMenu"
import { Container } from "../components/Container"
import { ProfilePicture } from "../components/ProfilePicture"
import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    // background: rgb(204,168,233);
    // background: linear-gradient(0deg, rgba(204,168,233,1) 0%, rgba(222,252,249,1) 100%);
    background: #f0f0f0;
    background-repeat: no-repeat;
    height: 100%;
  }
`
const Heading = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  margin-bottom: 25px;
`
const Headline = styled.h1`
  font-weight: 100;
  margin: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Heading>
        <ProfilePicture />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Headline>enzoborgfrantz</Headline>
          <SocialMediaMenu />
        </div>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      </Heading>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: `2rem`,
        }}
      >
        <Menu>
          <MenuItem to="/about-me/">About me</MenuItem>
          <MenuItem to="/page-2/">My stack</MenuItem>
          <MenuItem to="/page-2/">How I learn</MenuItem>
          <MenuItem to="/contact/">Contact me</MenuItem>
          <MenuItem to="/contact/">Contact me</MenuItem>
        </Menu>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: `0px 2rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <br />
        <main style={{ width: "100%" }}>
          <Container>{children}</Container>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
