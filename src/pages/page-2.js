import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
  const allAirtableData = data.allAirtable.nodes;

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <div>
      {
        allAirtableData.map((node) => (
          <div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <img src = {node.data.Picture}/> 
            </div>
              <h1>{node.data.Stage_name}</h1>
              <h2>{node.data.Birth_name}</h2>
              <div>
                <p>{node.data.Birthday}</p>
                <p>{node.data.Nationality}</p>
                <p>{node.data.Position}</p>
              </div>
          </div>
        ))
      }
      </div>  
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
    query {
      allAirtable {
        nodes {
          data {
            Stage_name
            Birth_name
            Birthday
            Nationality
            Position
            Picture
          }
          recordId
        }
      }
    }
`