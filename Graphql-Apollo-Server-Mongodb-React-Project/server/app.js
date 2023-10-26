
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const mongoose = require('mongoose');
const cors = require('cors');

// Connecting to Database
const MONGO_URL = 'mongodb+srv://sudikshakapoor001:eA8C0hry5oKYhXOn@cluster0.ehn1r31.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('Connected to DB!!');})
    .catch((error) => {console.log(error);})

// Creating Apollo Server
async function startServer() {
    const app = express();
    const server = new ApolloServer({typeDefs, resolvers});
    app.use(express.json());
    app.use(cors());
    await server.start();
    app.use('/graphql', expressMiddleware(server));
    app.listen(5000, () => console.log('Server started at port 5000!!'));
}
startServer();
