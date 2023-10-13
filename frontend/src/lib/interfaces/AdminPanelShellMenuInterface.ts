import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export interface AdminPanelShellMenuInterface {
  id: number;
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
}
