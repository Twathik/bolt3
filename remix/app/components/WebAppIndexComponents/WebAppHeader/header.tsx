/* eslint-disable jsx-a11y/anchor-is-valid */

import UserProfileButton from "@/components/GeneralComponents/UserProfileButton/UserProfileButton";
import { Link } from "@remix-run/react";
import bolt_logo from "@/images/logo_bolt.png";
import type { UsersGetUserResponseData } from "@/components/generated/models";

const navigation: { name: string; href: string }[] = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Panneau d'administration", href: "/admin-panel" },
];

export default function WebAppHeader({
  user,
}: {
  user: UsersGetUserResponseData["mainDb_user"];
}) {
  return (
    <header className="max-w-full bg-white">
      <nav
        className="mx-auto flex flex-grow items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global">
        <div className="flex cursor-pointer items-center lg:flex-1">
          <a onClick={() => {}} className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={bolt_logo} alt="" />
          </a>
          <span className="mx-8 text-slate-700">
            Dr. {user && user.fullName}
          </span>
        </div>

        <div className="hidden flex-row items-center justify-center lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              prefetch="intent"
              className="m-auto items-center justify-center text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className=" hidden items-center justify-center gap-x-6 lg:block">
          <UserProfileButton />
        </div>
      </nav>
    </header>
  );
}
