import { MongoClient } from "mongodb";

let client: MongoClient;

const initDbConnection = async () => {
  client = await MongoClient.connect("mongodb://root:root@database:27017/");
};

const getDbConnection = (dbName: string) => {
  return client.db(dbName);
};

export { initDbConnection, getDbConnection };
