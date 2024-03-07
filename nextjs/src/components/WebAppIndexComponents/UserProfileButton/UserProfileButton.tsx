"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FaChevronCircleDown } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

function UserProfileButton() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="sr-only">Open user menu</span>
            {/* <Image
              className="h-8 w-8 rounded-full bg-gray-50"
              src=""
              alt=""
            /> */}
            <span className="hidden lg:flex lg:items-center">
              <span
                className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                aria-hidden="true">
                Tom Cook
              </span>
              <span className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true">
                <FaChevronCircleDown />
              </span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4 md:w-[200px] flex flex-col">
              <NavigationMenuLink asChild>
                <Link
                  className="flex flex-col justify-end rounded-md p-6 no-underline outline-none hover:focus:shadow-md hover:bg-slate-100"
                  href="/">
                  Votre profile
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <LogoutButton />
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default UserProfileButton;
