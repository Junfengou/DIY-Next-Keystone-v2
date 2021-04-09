import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text,   } from '@keystone-next/fields';
import formatMoney from '../lib/formatMoney';

export const Rental = list({
  fields: {
    startDay: text({ isRequired: true }),
    startMonth: text({ isRequired: true }),
    startYear: text({ isRequired: true }),
    paymentAmount: integer(),
    items: relationship({ ref: 'RentalItem.rental', many: true }),
    user: relationship({ ref: "User.orders"}),
  },
});

