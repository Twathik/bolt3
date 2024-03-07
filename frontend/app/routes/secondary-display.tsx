import { getSelectedDisplay } from "@/components/SecondaryDisplay/utils";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import { useBoltStore } from "@/stores/boltStore";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await createClientFromCookiesAndCheckUser(request);
  return {};
};

export default function SecondaryDisplay() {
  const secondaryDisplay = useBoltStore((store) => store.secondaryDisplay);
  return getSelectedDisplay({ secondaryDisplay });
}
