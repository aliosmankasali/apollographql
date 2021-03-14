import { AuthenticationError, ForbiddenError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import User from '../model/user.model';
import bcrypt from 'bcrypt';

import * as errors from '../errormessage';
const JWT_SECRET_KEY = process.env.SECRET_CODE
const resolvers = {
    Query: {
        getKullanicilalar: (parent, args, context) => {
            if (!context.logedInUser) throw new ForbiddenError(errors.auth.failed);
            return User.find({});
        },
        kullaniciGetir: (parent, args, context) => {
            if (!context.logedInUser) throw new ForbiddenError(errors.auth.failed);
            return User.findById()
        }
    },
    Mutation: {
        singup: async (parent, args) => {
            if (!args.username || !args.password || !args.adi || !args.soyadi || !args.eposta) throw new AuthenticationError(errors.singup.bosalan)
               
            const checkUniqUser = await User.findOne({ username: args.username });
            if (checkUniqUser) throw new AuthenticationError(errors.singup.invalidUsername);
             const newUser = new User(args);
            newUser.password = bcrypt.hashSync(args.password,10);
            const user = await User.create(newUser);
            const token = jwt.sign({username:user.username},JWT_SECRET_KEY,{expiresIn:"30d"});
            
            
            return{
                id:user._id,
                username:user.username,
                token:token
            }

        }
    }

}
export default resolvers;