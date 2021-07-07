import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Topcard from "./topcard";
import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
   
    <Topcard  />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container className="p-3">{children}</Container>
      </main>
      <footer className="footer mt-auto py-3 bg-light text-black text-center">
        © {new Date().getFullYear()},
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
