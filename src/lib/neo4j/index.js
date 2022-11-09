// import { makeAugmentedSchema } from 'neo4j-graphql-js'
import neo4j from 'neo4j-driver'

// const typeDefs = `
//     type Movie {
//         title: String
//         year: Int
//     }
// `

// const schema = makeAugmentedSchema({ typeDefs })

const driver = neo4j.driver(
  'serverLink',
  neo4j.auth.basic('neo4j', 'deployments-stakes-disk'), 
  {encrypted: 'ENCRYPTION_OFF'}
)

const runServer = async () => {
  const query =
  `
  MATCH (n)
  RETURN (n)
  `

  // const params = {"limit": 10}
  const session = driver.session({database:"neo4j"})
  const data = await session.run(query) //, params)

  console.log(data.records)

  session.close()
  driver.close()

    // .then((result) => {
    //   result.records.forEach((record) => {
    //       console.log(record.get('count'));
    //   });
    //   session.close();
    //   driver.close();
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
}

runServer()

// import { ApolloServer } from 'apollo-server'

// const server = new ApolloServer({ schema, context: { driver } })

// server.listen(3003, '0.0.0.0').then(({ url }) => {
//   console.log(`GraphQL API ready at ${url}`);
// })

// import { neo4jgraphql } from 'neo4j-graphql-js'

// const resolvers = {
//   Query: {
//     Movie(object, params, ctx, resolveInfo) {
//       return neo4jgraphql(object, params, ctx, resolveInfo);
//     }
//   }
// };