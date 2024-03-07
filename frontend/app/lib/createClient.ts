import type { WunderGraphClient } from "@/components/generated/client";
import { createClientFromCookies } from "./wundergraph";

const createClient = async (request: Request): Promise<WunderGraphClient> =>
  createClientFromCookies(request);

export default createClient;
