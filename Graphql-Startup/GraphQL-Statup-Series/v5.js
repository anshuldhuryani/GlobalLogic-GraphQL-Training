
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
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId)
            } 
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This shows a author of a book',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt) },
        name: {type: new GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id)
            }
        }
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
            },
            getAuthors: {
                type: new GraphQLList(AuthorType),
                description: 'Author List',
                resolve: () => authors
            },
            getBook: {
                type: BookType,
                description: 'A single book',
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: (parent, args) => books.find(book => book.id === args.id)
            },
            getAuthor: {
                type: AuthorType,
                description: 'A single Author',
                args: { 
                    id: { type: GraphQLInt }
                },
                resolve: (parent, args) => authors.find(author => author.id === args.id)
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
query {
  getBook(id: 1) {
    name
  }
}

-----

query {
  getAuthor(id: 1) {
    name,
    books {
    name
  }
  }
}

*/