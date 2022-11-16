const { Neo4jGraphQL } = require("@neo4j/graphql")
const { ApolloServer, gql } = require("apollo-server")
const neo4j = require("neo4j-driver")

const USERNAME = 'neo4j'
const PASSWORD = 'A3NxKjm3XWli1RKd7MF1Plg6QuFtnhGZtIem3gLvYn0'
const AURA_ENDPOINT = 'neo4j+s://ea409794.databases.neo4j.io'

const driver = neo4j.driver(AURA_ENDPOINT, neo4j.auth.basic(USERNAME, PASSWORD))

const typeDefs = gql`
  type Person {
    name: String
    knows: [Person!]! @relationship(type: "KNOWS", direction: OUT)
    friendCount: Int @cypher(statement:"RETURN SIZE((this)-[:KNOWS]->(:Person))")
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