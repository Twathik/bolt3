import { AdminPanelShellMenuInterface } from "@/lib/interfaces/AdminPanelShellMenuInterface";
import {
  CalendarIcon,
  ChartPieIcon,
  DevicePhoneMobileIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const AdminPanelMenuItems: AdminPanelShellMenuInterface[] = [
  { id: 1, name: "Dashboard", href: "/adminPanel/dashboard", icon: HomeIcon },
  {
    id: 2,
    name: "Applications mobiles",
    href: "/adminPanel/mobileDevices",
    icon: DevicePhoneMobileIcon,
  },
  { id: 3, name: "Projects", href: "#", icon: FolderIcon },
  { id: 4, name: "Calendar", href: "#", icon: CalendarIcon },
  {
    id: 5,
    name: "Documents",
    href: "#",
    icon: DocumentDuplicateIcon,
  },
  { id: 6, name: "Corbeille", href: "/adminPanel/trash", icon: TrashIcon },
];

export default AdminPanelMenuItems;
