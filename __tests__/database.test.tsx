/**
 * @jest-environment node
 */
import { getURL } from "@/app/actions";
import { getData, insertData } from "@/lib/db";
import { generateUniqueString } from "@/lib/string";
import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Database test", () => {
  let con: MongoClient;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    con = await MongoClient.connect(mongoServer.getUri(), {});
  });

  afterAll(async () => {
    if (con) {
      await con.close();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  it("should successfully set & get information from the database", async () => {
    const uniqueStr = generateUniqueString();
    const originUrl = "originUrl";
    const db = con.db(mongoServer.instanceInfo!.dbName);

    expect(db).toBeDefined();
    const result = await insertData(originUrl, uniqueStr, con);
    expect(result.acknowledged).toBeTruthy();

    const actual = await getData(uniqueStr, con);
    expect(actual.originUrl).toBe(originUrl);
  });
});
