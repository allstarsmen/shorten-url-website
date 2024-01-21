/**
 * @jest-environment node
 */
import { generateURL, getURL } from "@/app/actions";
import { InitState } from "@/app/types/initState";
import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Database test", () => {
  const ORIGIN_URL = "https://www.youtube.com/watch?v=tFMHH3EcU6Q";
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

  it("Should generate URL success", async () => {
    const fakeState: InitState = { success: false, message: "" };
    const fakeData = new FormData();
    fakeData.set("originUrl", ORIGIN_URL);
    const { success } = await generateURL(fakeState, fakeData, con);
    expect(success).toBeTruthy();
  });

  it("Should returns correct the origin URL", async () => {
    const fakeState: InitState = { success: false, message: "" };
    const fakeData = new FormData();
    fakeData.set("originUrl", ORIGIN_URL);
    const { success, uniqueStr } = await generateURL(fakeState, fakeData, con);
    expect(success).toBeTruthy();

    const { originUrl } = await getURL(uniqueStr as string, con);
    expect(originUrl).toBe(ORIGIN_URL);
  });
});
