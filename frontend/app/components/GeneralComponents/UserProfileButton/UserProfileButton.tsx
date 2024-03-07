import { useAuth } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";
import { Button } from "@/ui/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/ui/components/ui/navigation-menu";

import { FaChevronCircleDown } from "react-icons/fa";
import { Link, useNavigate } from "@remix-run/react";
import { useCallback } from "react";

function UserProfileButton() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const closeTabs = useBoltStore((store) => store.closeTabs);

  const logoutUser = useCallback(() => {
    logout({ logoutOpenidConnectProvider: true });
    closeTabs();
    navigate("/login");
  }, [closeTabs, logout, navigate]);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
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
                  to="/">
                  Votre profile
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Button
                  variant="destructive"
                  onClick={logoutUser}
                  className="flex flex-col justify-center item-center rounded-md p-6 no-underline outline-non">
                  Se deconnecter
                </Button>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default UserProfileButton;
