import { cn } from "@/lib/utils";
import { Button } from "@/ui/components/ui/button";
import { NavigationMenuLink } from "@/ui/components/ui/navigation-menu";
import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

const PatientFolderHeaderListItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Button
          variant="ghost"
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full",
            className
          )}
          {...props}>
          <div className="flex flex-row">
            <PlusIcon className="w-4 h-4" />
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Button>
      </NavigationMenuLink>
    </li>
  );
});
PatientFolderHeaderListItem.displayName = "ListItem";

export default PatientFolderHeaderListItem;
