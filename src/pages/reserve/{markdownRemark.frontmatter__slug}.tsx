import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

type DataProps = {
  markdownRemark: {
    frontmatter: {
      title: string,
    },
    html: any
  },
}
const offer = ({ data }: PageProps<DataProps>) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export default offer
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
