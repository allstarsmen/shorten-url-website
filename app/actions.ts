"use server";

import { generateUniqueString } from "@/lib/string";
import { z } from "zod";
import { InitState } from "./types/initState";
import clientPromise from "@/lib/db";

export async function generateURL(prevState: InitState, formData: FormData) {
  const schema = z
    .object({
      originUrl: z.string().url(),
    })
    .required();

  const parse = schema.safeParse({
    originUrl: formData.get("originUrl"),
  });

  if (!parse.success) {
    return {
      success: false,
      message: "Failed to generate new URL",
    };
  }

  const data = parse.data;
  const client = await clientPromise;
  const db = client.db("TEST");
  const uniqueStr = generateUniqueString();
  const result = await db.collection("shortened_urls").insertOne({
    originUrl: data.originUrl,
    uniqueStr,
  });

  if (!result.acknowledged) {
    return {
      success: false,
      message: "Failed to generate new URL",
    };
  }

  return {
    success: true,
    uniqueStr,
    message: "New url is generated successfully",
  };
}
