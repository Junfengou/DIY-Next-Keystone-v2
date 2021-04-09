import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const User = list({
    fields: {
        username: text({isRequired: true}),
        email: text({isRequired: true, isUnique: true}),
        password: password(),
        firstname: text({isRequired: true}),
        lastname: text({isRequired: true}),
        address: text({isRequired: true}),
        city: text({isRequired: true}),
        state: text({isRequired: true}),
        zipcode: integer({isRequired: true}),
        country: text({isRequired: true}),
        phone: text({isRequired: true}),
        drlic: text({isRequired: true}),
        additionalInfo: text(), 
        cart: relationship({ 
            ref: 'CartItem.user',
            // user can have multiple items in the cart
            many: true,
        }),
        orders: relationship({ ref: 'Rental.user', many: true }),
    }
})