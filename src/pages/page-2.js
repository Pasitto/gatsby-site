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
      <h1>NCT DREAM'S MEMBERS</h1>
      <p>NCT Dream (엔씨티 Dream) is the 3rd sub-unit of the boy group NCT. The sub-unit consists of the members:  Mark, Renjun, Jeno, Haechan, Chenle, Jisung, Jaemin and is a rotational group, meaning that for each comeback/release the lineup can consist of a different arrangement of the 7 members. From 2016 til early 2020 the group used to have a graduation system, where members who reached the Korean age of 20 would graduate and leave the group. NCT Dream debuted on August 24, 2016 under SM Entertainment.</p>
      
      <div>
      {
        allAirtableData.map((node) => (
          <center>
            <div style={{ maxWidth: `50%`, marginBottom: `1.45rem` }}>
              <img src = {node.data.Picture}/> 
            </div>
              <h1>Stage Name: {node.data.Stage_name}</h1>
              <h2>Birth Name: {node.data.Birth_name}</h2>
              <div>
                <p>Birthday: {node.data.Birthday}</p>
                <p>Nationality: {node.data.Nationality}</p>
                <p>Position: {node.data.Position}</p>
              </div>
          </center>
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