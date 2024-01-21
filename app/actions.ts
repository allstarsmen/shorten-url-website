"use server";

import { getData, insertData } from "@/lib/db";
import { generateUniqueString } from "@/lib/string";
import { isValidURL } from "@/lib/url";
import { z } from "zod";
import { InitState } from "./types/initState";

export async function generateURL(prevState: InitState, formData: FormData) {
  const schema = z
    .object({
      originUrl: z
        .string()
        .regex(/^(http|https):\/\//)
        .max(2000)
        .url(),
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
  const uniqueStr = generateUniqueString();
  const result = await insertData(data.originUrl, uniqueStr);

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

export async function getURL(uniqueStr: string) {
  if (!isValidURL(uniqueStr)) {
    return {
      success: false,
      message: "Invalid URL",
    };
  }

  const result = await getData(uniqueStr);

  if (!result) {
    return {
      success: false,
      message: "Invalid URL",
    };
  }

  return {
    success: true,
    originUrl: result.originUrl,
  };
}
