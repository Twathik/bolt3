/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import AdminPanelMenuItems from "./AdminPanelMenuItems";
import { classNames } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

function AdminPanel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const menu = AdminPanelMenuItems.map((item) => (
    <CommandItem key={item.name}>
      <Link
        href={item.href}
        prefetch
        className={classNames(
          item.href === path ? "bg-gray-800 text-white" : "text-gray-400 ",
          "bloc group flex flex-1 justify-start gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
        )}>
        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {item.name}
      </Link>
    </CommandItem>
  ));
  return (
    <div className="grid grid-cols-12 gap-4 m-5">
      <div className="col-span-3 ">
        <Command className="rounded-lg border shadow-md h-[85vh]">
          <CommandList className="max-h-full">
            <CommandGroup heading="Panneau de configuration">
              {menu}
            </CommandGroup>
            {/* <CommandSeparator />
            <CommandGroup heading="Other"></CommandGroup> */}
          </CommandList>
        </Command>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}

export default AdminPanel;
