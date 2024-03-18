/* eslint-disable jsx-a11y/anchor-is-valid */

import bolt_logo from "@/components/GeneralComponents/images/logo_bolt.png";
import Image from "next/image";
import Link from "next/link";
import UserProfileButton from "../UserProfileButton/UserProfileButton";
import { useMemo } from "react";
import type { PublicUser } from "@/components/wg-generated/client";

const navigation: { name: string; href: string }[] = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Panneau d'administration", href: "/admin-panel" },
];

export default function WebAppHeader({
  user,
}: {
  user: PublicUser | undefined;
}) {
  const links = useMemo(
    () =>
      navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          prefetch
          className="m-auto items-center justify-center text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </Link>
      )),
    []
  );
  return (
    <header className="max-w-full bg-white">
      <nav
        className="mx-auto flex flex-grow items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global">
        <div className="flex cursor-pointer items-center lg:flex-1">
          <Image className="h-8 w-auto" src={bolt_logo} alt="" />
          <span className="mx-8 text-slate-700">
            Dr. {user && `${user.name}`}
          </span>
        </div>

        <div className="hidden flex-row items-center justify-center lg:flex lg:gap-x-12">
          {links}
        </div>
        <div className=" hidden items-center justify-center gap-x-6 lg:block">
          <UserProfileButton />
        </div>
      </nav>
    </header>
  );
}
