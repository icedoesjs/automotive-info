import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import secrets from '../../../secrets';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    secret: "iIbBNi7vujsY3HePIh_yNxOahtjxafLOBsW5Yb-B_wc",
    providers: [
        GoogleProvider({
            clientId: secrets.clientID,
            clientSecret: secrets.clientSecret
        }
    )]
}

export default NextAuth(authOptions);
