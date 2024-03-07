import type { AdminPanelShellMenuInterface } from "@/lib/interfaces/AdminPanelShellMenuInterface";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaClipboardList } from "react-icons/fa6";
import { HiOutlineSignal } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";

const AdminPanelMenuItems: AdminPanelShellMenuInterface[] = [
  { id: 1, name: "Dashboard", href: "/admin-panel/dashboard", icon: FaHome },
  {
    id: 2,
    name: "Applications mobiles",
    href: "/admin-panel/mobile-devices",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    id: 3,
    name: "Templates",
    href: "/admin-panel/templates",
    icon: FaClipboardList,
  },
  {
    id: 4,
    name: "Imagerie",
    href: "/admin-panel/modalities",
    icon: HiOutlineSignal,
  },
  {
    id: 5,
    name: "Documents",
    href: "#",
    icon: HiDocumentDuplicate,
  },
  { id: 6, name: "Corbeille", href: "/admin-panel/trash", icon: FaRegTrashCan },
];

export default AdminPanelMenuItems;
