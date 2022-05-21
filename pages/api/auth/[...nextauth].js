import axios from "axios";
import NextAuth from "next-auth"


import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({

        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),

            CredentialsProvider({
                name: "Credentials",                
                async authorize(credentials, req) {
                    const res = axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials)

                    const user = res.data

                    if (user) {                  
                        return user
                    } else {                  
                        throw '/aut/signin?i=1'
                    }
                }

                })
        ],

    
    getSession: {
        jwt: true,
    },

    jwt: {
        secret: process.env.JWT_TOKEN,
    },

    callbacks: {
        async jwt({ token, user }) {
          
          if (user) {
            token.accessToken = user.id
          }
          return token          
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.userId = token.accessToken
            return session
          }
      },


    database: process.env.MONGODB_URI
})


