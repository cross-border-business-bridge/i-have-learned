/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Image from "gatsby-image";

import {rhythm} from "../utils/typography";

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-leo.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter,
            linkedin,
            github
          }
        }
      }
    }
  `);

    const {
        author,
        social: {
            // twitter,
            linkedin,
            github
        }
    } = data.site.siteMetadata;

    // console.log(twitter);
    // console.log(linkedin);

    return (
        <div
            style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
            }}
        >
            <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <p>
                Written by <strong>{author}</strong> who lives and works in Shanghai, China to share his business view,
                life-style and so forth.
                <br/>
                You can contact with me via <a href={`https://www.linkedin.com/in/${linkedin}`}>LinkedIn</a>  or &nbsp;
                <a href={`https://github.com/${github}`}>github</a>

            </p>

            {/*<p>*/}
            {/*</p>*/}

        </div>
    )
};

export default Bio;
