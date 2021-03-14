import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import {dbConnection} from './model';
import typeDefs from './graphql/typeDefs';
import resolvers from  './graphql/resolvers';
import 'dotenv/config';

const app = express();
app.use(cors());




const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app, path: '/grapi' })
app.use('/', (req, res) => {
    res.send('Sunucu Çalıştı')
    
});
app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`);
});
