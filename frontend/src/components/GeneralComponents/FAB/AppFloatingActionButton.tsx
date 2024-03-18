"use client";
import { useCallback, useState } from "react";

import { useHotkeys } from "@mantine/hooks";

//import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CgMenuRound } from "react-icons/cg";
import { useMutation } from "@/components/wg-generated/nextjs";
import { HotKeysMapping } from "@/lib/utils/HotKeysMapping";

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
];

function AppFloatingActionButton() {
  /* const { toast } = useToast(); */
  const [open, setOpen] = useState(false);
  const { trigger } = useMutation({
    operationName: "AppSubscription/triggerAppSubscription",
  });

  const closeAllTabs = useCallback(async () => {
    await trigger({
      appPayload: JSON.stringify({}),
      appType: "closeAllTabs",
      global: false,
    });
  }, [trigger]);
  useHotkeys([
    [HotKeysMapping.closeAllWindows, async () => await closeAllTabs()],
  ]);

  /*  const triggerEmptyTrash = useCallback(async () => {
    try {
      await trigger({
        appPayload: JSON.stringify({}),
        appType: "emptyTrash",
        global: false,
      });
    } catch (error) {
      console.log({ error });
      toast({
        title: "une erreur est survenue",
        description: "La corbeille n'a pas pu être vidée",
        variant: "destructive",
      });
    }
  }, [toast, trigger]); */

  const secondaryDisplay = useCallback(() => {
    window.open("http://bolt3.local/secondary-display");
  }, []);

  return (
    <div className="group fixed bottom-0 right-0 flex  h-24 w-24 items-end justify-end p-2 ">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="default" className="rounded-full">
            <span className="text-lg">
              <CgMenuRound />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={secondaryDisplay}>
              Ecran secondaire
            </DropdownMenuItem>
            <DropdownMenuItem>Set due date...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput
                    placeholder="Filter label..."
                    autoFocus={true}
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setOpen(false);
                          }}>
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default AppFloatingActionButton;
