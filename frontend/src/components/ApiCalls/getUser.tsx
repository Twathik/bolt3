"use server";
import createWgClient from "@/lib/createClient";
import type { PublicUser } from "../wg-generated/client";

const getUser = async (): Promise<PublicUser | undefined> => {
  try {
    const client = await createWgClient();
    const user = await client.fetchUser();
    return user;
  } catch (error) {
    console.log({ error });
  }
};

export default getUser;
