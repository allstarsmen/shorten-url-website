import { MongoClient } from "mongodb";

const DB_NAME = "TEST";
const COLLECTION = "shortened_urls";

const mongoDbClient = async () => {
  const uri = process.env.MONGODB_URI || "";
  const options = {};

  if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    // @ts-ignore
    if (!global._mongoClient) {
      // @ts-ignore
      global._mongoClient = new MongoClient(uri, options);
    }
    // @ts-ignore
    return global._mongoClient;
  } else {
    // In production mode, it's best to not use a global variable.
    return new MongoClient(uri, options);
  }
};

const insertData = async (
  originUrl: string,
  uniqueStr: string,
  testClient?: MongoClient
) => {
  const client = testClient || (await mongoDbClient());
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).insertOne({
    originUrl,
    uniqueStr,
  });
  if (!testClient) client.close();
  return result;
};

const getData = async (uniqueStr: string, testClient?: MongoClient) => {
  const client = testClient || (await mongoDbClient());
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).findOne({ uniqueStr });
  if (!testClient) client.close();
  return result;
};

export { getData, insertData };
