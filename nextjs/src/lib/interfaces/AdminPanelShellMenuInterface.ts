import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { IconType } from "react-icons/lib";

export interface AdminPanelShellMenuInterface {
  id: number;
  name: string;
  href: string;
  icon: IconType;
}
