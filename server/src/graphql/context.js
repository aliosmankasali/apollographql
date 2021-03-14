import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';



const JWT_SECRET_KEY = process.env.SECRET_CODE;

const context = ({ req }) => {
    
    try {
        const authorization = req.headers.authorization;
        if (!authorization) return undefined;

        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        return {
            logedInUser: decoded.username
        }
    } catch (error) {
        console.log(error);
        throw new AuthenticationError('Geçersiz Token..');
    }
}
export default context;