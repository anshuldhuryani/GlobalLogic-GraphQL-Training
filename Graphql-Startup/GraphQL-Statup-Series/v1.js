
const express = require('express');
const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString } = require('graphql');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => "Hello World!!"
            }
        })
    })
})

app.use('/graphql', expressGraphQL({
    schema : schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('The server is running at port 5000!!');
})
/* ***************************** */

/* query {
    message
  }
*/