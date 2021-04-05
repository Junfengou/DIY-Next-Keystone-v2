import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User"
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default withAuth(

config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in here
    User
  }),
  ui: {
    // TODO: change this for roles
    
    isAccessAllowed: ({ session }) => {
      // console.log("session: ", session);
      return !!session?.data;
    },
  },
  // TODO: Add session values here
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}));