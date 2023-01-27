import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import secrets from '../../../secrets';

export default NextAuth({
    providers: [ 
        GoogleProvider({ 
            clientId: secrets.clientID,
            clientSecret: secrets.clientSecret
        }
)   ]
})