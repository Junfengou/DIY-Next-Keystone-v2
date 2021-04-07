import { list } from "@keystone-next/keystone/schema";
import {integer, relationship } from "@keystone-next/fields";


export const CartItem = list({
  fields: {
    storage: relationship({ ref: 'Storage'}),
    // A cart can only have one user
    user: relationship({ ref: 'User.cart'}),
},
})