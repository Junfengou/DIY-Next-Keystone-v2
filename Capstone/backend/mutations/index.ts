import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from "./addToCart";
// import checkOut from "./checkOut";

const gql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
    typeDefs: gql`
        type Mutation {
            addToCart(storageId: ID) : CartItem
            # checkOut() : Rental;
        }
    `,
    resolvers: {
        Mutation: {
            addToCart,
            // checkOut
        }
    }
})

