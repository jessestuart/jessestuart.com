import { graphql } from 'gatsby'
import * as React from 'react'

import * as _ from 'lodash'

import BlogHeader from '../components/Blog/BlogHeader'
import Layout from '../components/layout'
import StyledPanel from '../components/StyledPanel/StyledPanel'

interface MarkdownRemarkNode {
  excerpt: string
  fields: {
    slug: string
  }

  frontmatter: {
    date: string
    title: string
  }
}

interface Props {
  location: {
    pathname: string
  }

  data: {
    allMarkdownRemark: {
      edges: {
        node: MarkdownRemarkNode[]
      }
    }
  }
}

class BlogIndex extends React.Component<Props> {
  public render() {
    const { props } = this
    const { location } = props
    const posts = _.get(props, 'data.allMarkdownRemark.edges')

    return (
      <Layout location={location}>
        <div className="bg-near-white lh-copy pa3-ns pv4 w-100">
          {posts.map(({ node }) => {
            const { excerpt, fields, frontmatter } = node
            const date = _.get(frontmatter, 'date')
            const slug = _.get(fields, 'slug')
            const title = _.get(frontmatter, 'title')
            return (
              <StyledPanel key={slug}>
                <article>
                  <BlogHeader link={slug} location={location} date={date}>
                    {title}
                  </BlogHeader>
                  <p
                    className="f4"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  />
                </article>
              </StyledPanel>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "D MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
