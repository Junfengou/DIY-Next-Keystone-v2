import { list } from "@keystone-next/keystone/schema";
import { text, integer, select } from "@keystone-next/fields";


export const Storage = list({
    fields: {
        unitSize: text({isRequired: true}),
        description: text({isRequired: true}),
        unitNum: integer(),
        price: integer(),
        status: select({
            options: [
              { label: 'Available', value: 'AVAILABLE' },
              { label: 'Unavailable', value: 'UNAVAILABLE' },
            ],
            defaultValue: 'Available',
          }),
    }
})