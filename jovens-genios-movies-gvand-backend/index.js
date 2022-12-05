const { Neo4jGraphQL } = require("@neo4j/graphql")
const { ApolloServer, gql } = require("apollo-server")
const neo4j = require("neo4j-driver")

const USERNAME = 'neo4j'
const PASSWORD = 'zWd9DU2NrQtKBMeqhsRCyGuYIQefoT2Eg9xIK4pbVdY'
const AURA_ENDPOINT = 'neo4j+s://0582b45c.databases.neo4j.io'

const driver = neo4j.driver(AURA_ENDPOINT, neo4j.auth.basic(USERNAME, PASSWORD))

const typeDefs = gql`
  type Movie {
    title: String!
    plot: String
    poster: String!
    imdbRating: Float
    year: Int
    runtime: Int
    genres: [Genre!]! @relationship(type: "IN_GENRE", direction: OUT)
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    directors: [Director!]! @relationship(type: "DIRECTED", direction: IN)
  }
  type Genre {
    name: String!
  }
  type Actor {
    name: String!
  }
  type Director {
    name: String!
  }
  `

const neo4jGraphQL = new Neo4jGraphQL({
  typeDefs,
  driver
})

neo4jGraphQL.getSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    context: { driverConfig: { database: 'neo4j' } }
  })

  server.listen().then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`)
  })
})