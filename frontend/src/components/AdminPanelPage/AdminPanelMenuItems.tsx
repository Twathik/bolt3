import type { AdminPanelShellMenuInterface } from "@/lib/interfaces/AdminPanelShellMenuInterface";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineSignal,
  HiDocumentDuplicate,
} from "react-icons/hi2";
import { FaClipboardList, FaRegTrashCan } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const AdminPanelMenuItems: AdminPanelShellMenuInterface[] = [
  { id: 1, name: "Dashboard", href: "/admin-panel", icon: FaHome },
  {
    id: 2,
    name: "Applications mobiles",
    href: "/admin-panel/mobile-devices",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    id: 3,
    name: "Templates",
    href: "/admin-panel/document-templates",
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
