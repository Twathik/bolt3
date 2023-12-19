import type { AdminPanelShellMenuInterface } from "@/lib/interfaces/AdminPanelShellMenuInterface";
import {
  DevicePhoneMobileIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  TrashIcon,
  ClipboardDocumentCheckIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

const AdminPanelMenuItems: AdminPanelShellMenuInterface[] = [
  { id: 1, name: "Dashboard", href: "/admin-panel/dashboard", icon: HomeIcon },
  {
    id: 2,
    name: "Applications mobiles",
    href: "/admin-panel/mobile-devices",
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 3,
    name: "Templates",
    href: "/admin-panel/templates",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    id: 4,
    name: "Imagerie",
    href: "/admin-panel/modalities",
    icon: SignalIcon,
  },
  {
    id: 5,
    name: "Documents",
    href: "#",
    icon: DocumentDuplicateIcon,
  },
  { id: 6, name: "Corbeille", href: "/admin-panel/trash", icon: TrashIcon },
];

export default AdminPanelMenuItems;
