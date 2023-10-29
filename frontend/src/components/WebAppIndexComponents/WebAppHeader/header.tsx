"use client";
import { useCallback, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useUser } from "../../wg-generated/nextjs";
import UserProfileButton from "@/components/GeneralComponents/UserProfileButton/UserProfileButton";
import Link from "next/link";

const navigation: { name: string; href: string }[] = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Panneau d'administration", href: "/adminPanel/dashboard" },
];

export default function WebAppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data } = useUser();
  const router = useRouter();

  const webAppPAge = useCallback(() => router.push("/webapp/search"), []);
  const mobileOpen = useCallback(() => setMobileMenuOpen(true), []);
  const mobileClosed = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <header className="max-w-full bg-white">
      <nav
        className="mx-auto flex flex-grow items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex cursor-pointer items-center lg:flex-1">
          <a onClick={webAppPAge} className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/logo_bolt.png" alt="" />
          </a>
          <span className="mx-8 text-slate-700">Dr. {data && data.name}</span>
        </div>

        <div className="hidden flex-row items-center justify-center lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="m-auto items-center justify-center text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className=" hidden items-center justify-center gap-x-6 lg:block">
          <UserProfileButton />
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={mobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Link href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="/logo_bolt.png" alt="" />
            </Link>
            <Link
              href="/logout"
              className="ml-auto rounded-md bg-pink-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
            >
              Se déconnecter
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={mobileClosed}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
