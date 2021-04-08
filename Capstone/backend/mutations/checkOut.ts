// This is still VERY confusing, refer back to video #55

import { KeystoneContext } from "@keystone-next/types";
import {  CartItemCreateInput, RentalCreateInput } from ".././.keystone/schema-types";


const graphql = String.raw;

 async function checkout(
    root: any,
    Arguments, 
    context: KeystoneContext
    ) :  Promise<RentalCreateInput>
    {
        // 1. Make sure they're signed in
        const userId = context.session.itemId;

        if(!userId) {
            throw new Error("Sorry. You must be signed in to create an order")
        }

        const user = await context.lists.User.findOne({
            where: { id: userId },
            resolveFields: graphql`
            id
            name
            email
            cart {
                storage {
                    unitSize
                    description
                    unitNum
                    price
                }
            }
          `
            
        })

        console.dir(user, { depth: null});
        // 2. Calculate the total price

        const cartItems = user.cart.filter(cartItem => cartItem.storage);
        const amount = cartItems.reduce(function(tally: number, cartItem: CartItemCreateInput) {
          return tally + cartItem.storage.price;
        }, 0);
        // console.log(amount)


        // 4. Convert the cartItems to orderItems
        const orderItems = cartItems.map(cartItem => {
            const orderItem = {
              unitSize: cartItem.storage.unitSize,
              unitNum: cartItem.storage.unitNum,
              price: cartItem.storage.price,
            }
            return orderItem;
          })

        // 5. Create the order and return it
        const order = await context.lists.Rental.createOne({
            data: {
              paymentAmount: amount,
              items: { create: orderItems },
              user: { connect: { id: userId }}
            }
          });

        // 6. clean up any old cart items
        const cartItemIds = user.cart.map(cartItem => cartItem.id);
        await context.lists.CartItem.deleteMany({
          ids: cartItemIds
        });
        return order;
    }


    export default checkout;