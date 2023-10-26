const gql = 
require('graphql-tag');

const typeDefs = gql`
    type Todo {
        id: ID!,
        title: String!,
        completed: Boolean
    }
    type Student {
        id: ID,
        firstName: String,
        lastName: String,
        age: Int
    }
    type Query {
        getTodos: [Todo]
        getStudents : [Student],
        getStudent(id: ID): Student
    }
    type Mutation {
        create(firstName: String, lastName: String, age: Int): Student,
        update(id: ID, firstName: String, lastName: String, age: Int): Student,
        delete(id: ID): Student
    }
`;

module.exports = {typeDefs};