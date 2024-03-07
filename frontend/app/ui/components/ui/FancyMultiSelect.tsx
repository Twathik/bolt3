import * as React from "react";
import { X } from "lucide-react";
import { Command as CommandPrimitive } from "cmdk";
import { Command, CommandGroup, CommandItem } from "@/ui/components/ui/command";
import { Badge } from "@/ui/components/ui/badge";

export type FancyMultiSelectOptions = Record<"value" | "label", string>;

export function FancyMultiSelect({
  options,
  selected,
  onValueChange,
}: {
  options: FancyMultiSelectOptions[];
  selected: FancyMultiSelectOptions[];
  onValueChange: React.Dispatch<
    React.SetStateAction<FancyMultiSelectOptions[]>
  >;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);

  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback(
    (option: FancyMultiSelectOptions) => {
      onValueChange((prev) => prev.filter((s) => s.value !== option.value));
    },
    [onValueChange]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            onValueChange((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [onValueChange]
  );

  const selectables = React.useMemo(
    () => options.filter((option) => !selected.includes(option)),
    [options, selected]
  );

  const RenderSelected = React.useMemo(
    () =>
      selected.map((option) => {
        return (
          <Badge key={option.value} variant="secondary">
            {option.label}
            <button
              className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUnselect(option);
                }
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={() => handleUnselect(option)}>
              <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
            </button>
          </Badge>
        );
      }),
    [handleUnselect, selected]
  );

  const RenderSelectable = React.useMemo(
    () =>
      selectables.map((option) => {
        return (
          <CommandItem
            key={option.value}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onSelect={(value) => {
              setInputValue("");
              onValueChange((prev) => [...prev, option]);
            }}
            className={"cursor-pointer"}>
            {option.label}
          </CommandItem>
        );
      }),
    [onValueChange, selectables]
  );

  const onBlur = React.useCallback(() => setOpen(false), [setOpen]);
  const onFocus = React.useCallback(() => setOpen(true), [setOpen]);

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent">
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex gap-1 flex-wrap">
          {RenderSelected}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder="Veuillez Selectionner..."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {RenderSelectable}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
