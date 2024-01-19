"use server";

import { generateUniqueString } from "@/lib/string";
import { z } from "zod";
import { InitState } from "./types/initState";

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

  return {
    success: true,
    uniqueStr: generateUniqueString(),
    message: "New url is generated successfully",
  };
}
