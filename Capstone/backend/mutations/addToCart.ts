import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { CartItemCreateInput } from ".././.keystone/schema-types";
import { Session } from "../types";


interface Arguments {
    storageId: string
}

async function addToCart(
    root: any,
    {storageId} : Arguments,
    context: KeystoneContext) : Promise<CartItemCreateInput> {

        // check to see if there is a current user
        const sesh = context.session as Session;
        if(!sesh.itemId)
        {
            throw new Error("You must be logged in to do this")
        }

        
        // create a new cart item
        return await context.lists.CartItem.createOne({
            data: {
                storage: { connect: {id: storageId }},
                user: { connect: {id: sesh.itemId }},
            }
        })
}

export default addToCart;