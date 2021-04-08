import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text, virtual  } from '@keystone-next/fields';
import formatMoney from '../lib/formatMoney';

export const Rental = list({
    fields: {
        label: virtual({
            graphQLReturnType: 'String',
            resolver: function(item) {
                return `Total of this order ${formatMoney(item.paymentAmount)}`
            }
        }),
      paymentAmount: integer(),
      startDay: text({ isRequired: true }),
      startMonth: text({ isRequired: true }),
      startYear: text({ isRequired: true }),
      unitSize: text({ isRequired: true  }),
      unitNum: integer(),
      status: text({ isRequired: true  }),
      user: relationship({ ref: "User.orders"}),
    },
  });