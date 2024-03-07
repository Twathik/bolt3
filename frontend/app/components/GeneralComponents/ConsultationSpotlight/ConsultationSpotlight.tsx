import { useBoltStore } from "@/stores/boltStore";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { FaWindowMaximize } from "react-icons/fa";
//import { Spotlight, closeSpotlight, spotlight } from "@mantine/spotlight";
import { Link } from "@remix-run/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { badgeVariants } from "@/ui/components/ui/badge";
import CloseConsultation from "./CloseConsultation";
import CallPatient from "./CallPatient";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/ui/components/ui/command";

function ConsultationSpotlight() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "l" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export default ConsultationSpotlight;
