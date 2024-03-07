import { createClientFromCookies, useAuth } from "@/lib/wundergraph";
import Welcome_doctor_young_1 from "../images/Welcome_doctor_young_1.png";
import logo_bolt from "../images/logo_bolt.png";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const client = createClientFromCookies(request);
  try {
    const user = await client.fetchUser();
    if (user) return redirect("/");
  } catch (error) {}

  return json({});
};
export const meta: MetaFunction = () => [{ title: "Se connecter" }];

export default function Login() {
  const { login } = useAuth();
  return (
    <main className="flex min-h-screen flex-grow justify-center">
      <div className="flex flex-col justify-center px-2 py-12 sm:px-4 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <img className="h-40 w-40" src={logo_bolt} alt="Your Company" />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Connectez vous
            </h2>
          </div>

          <div className="mt-10">
            <div className="mt-10">
              <div className="mt-6 grid grid-cols-1 gap-4">
                <button
                  onClick={() =>
                    login("kc", "http://bolt3.local/webapp/search")
                  }
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-5 text-3xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  S'authentifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className=" absolute inset-0 h-full w-full object-cover"
          src={Welcome_doctor_young_1}
          alt=""
        />
      </div>
    </main>
  );
}
