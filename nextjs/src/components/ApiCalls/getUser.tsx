"use server";
import createWgClient from "@/lib/createClient";
import type { PublicUser } from "../wg-generated/client";

const getUser = async (): Promise<PublicUser | undefined> => {
  try {
    const client = await createWgClient();
    return client.fetchUser();
  } catch (error) {
    console.log({ error });
  }
};

export default getUser;
