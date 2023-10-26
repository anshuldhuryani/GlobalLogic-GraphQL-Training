
const express = require('express');
const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList} = require('graphql');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();

const authors = [
    {id: 1, name: 'Sarah Bowling'},
    {id: 2, name: 'John Smith'},
    {id: 3, name: 'Roger Lee'}
];

const books = [
    {id: 1, name: 'Harry Potter Series One', authorId: 1},
    {id: 2, name: 'Harry Potter Series Two', authorId: 1},
    {id: 3, name: 'Shadow and Reflection Series One', authorId: 2},
    {id: 4, name: 'Shadow and Reflection Series Two', authorId: 2},
    {id: 5, name: 'Shadow and Reflection Series Three', authorId: 2},
    {id: 6, name: 'Beyond the Expectation Series One', authorId: 3},
    {id: 7, name: 'Beyond the Expectation Series Two', authorId: 3},
    {id: 8, name: 'Beyond the Expectation Series Three', authorId: 3},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This shows a book written by an author',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) }
    })
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'Root Query',
        fields: () => ({
            getbooks: {
                type: new GraphQLList(BookType),
                description: "Book List",
                resolve: () => books
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

/* 
{
   getbooks {
    id,
    name
  } 
}
*/