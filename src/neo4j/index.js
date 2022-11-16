import neo4j from 'neo4j-driver'
import { makeAugmentedSchema } from 'neo4j-graphql-js'
import { ApolloServer } from 'apollo-server'
import { neo4jgraphql } from 'neo4j-graphql-js'

const runServer = () => {
  const typeDefs = `
  type Movie {
      title: String
      year: Int
      imdbRating: Float
      genres: [Genre] @relation(name: "IN_GENRE", direction: OUT)
  }
  type Genre {
      name: String
      movies: [Movie] @relation(name: "IN_GENRE", direction: IN)
  }
  `

  const schema = makeAugmentedSchema({ typeDefs })

  const driver = neo4j.driver(
    'localhost:7687',
    neo4j.auth.basic('neo4j', 'letmein')
  )

  const server = new ApolloServer({ schema, context: { driver } })

  server.listen(3003, '0.0.0.0').then(({ url }) => {
    console.log(`GraphQL API ready at ${url}`)
  })

  const resolvers = {
    Query: {
      Movie(object, params, ctx, resolveInfo) {
        return neo4jgraphql(object, params, ctx, resolveInfo)
      }
    }
  }
}

runServer()

// curl --request POST \
//   --header 'content-type: application/json' \
//   --url http://localhost:3003/ \
//   --data '{"query":"query { __typename }"}'


// mutation {
//   createMovies(
//     input: [
//       {
//         title: "Forrest Gump"
//         actors: { create: [{ node: { name: "Tom Hanks" } }] }
//       }
//     ]
//   ) {
//     movies {
//       title
//       actors {
//         name
//       }
//     }
//   }
// }
