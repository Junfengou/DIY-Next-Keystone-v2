import { storages } from './data';

export async function insertSeedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${storages.length} Products`);
  const { mongoose } = adapter;
  for (const storage of storages) {
    console.log(`  🛍️ Adding Product: ${storage.unitSize}`);
    await mongoose.model('Storage').create(storage);
  }
  console.log(`✅ Seed Data Inserted: ${storages.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}