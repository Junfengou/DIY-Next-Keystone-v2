import { list } from "@keystone-next/keystone/schema";
import {DateTime} from "@keystonejs/fields"
import { text, integer, select, relationship } from "@keystone-next/fields";


export const RentalItem = list({
    fields: {
        unitSize: text({isRequired: true}),
        description: text(),
        unitNum: integer(),
        price: integer(),
        rental: relationship({ ref: 'Rental.items'})
    }
})