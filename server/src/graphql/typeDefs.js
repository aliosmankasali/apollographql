import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id:ID
        username:String
        adi:String
        soyadi:String
        eposta:String
        password:String
        isAdmin:Boolean
        telefonno:String
    }
    type Auth {
        user:User
        token:String
        isLogin:IsLogin
    }
    type IsLogin{
        durum:Boolean
        message:String
    }
    type Query {
        getKullanicilalar:[User!]
        kullaniciGetir(id:ID!):User!
        testquery:String,
       
    }
    type Mutation {
        singup(username:String, password:String!,adi:String!,soyadi:String!,eposta:String!,isAdmin:Boolean!,telefonno:String!):Auth!
        login(username:String!,password:String!):Auth
    }
`
export default typeDefs;