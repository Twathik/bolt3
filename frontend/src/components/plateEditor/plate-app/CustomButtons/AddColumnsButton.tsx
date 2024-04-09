/* eslint-disable react/jsx-pascal-case */
import { Icons } from "@/components/icons";
import { ToolbarButton } from "@/components/plate-ui/toolbar";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { TDescendant } from "@udecode/plate-common";
import { useEditorRef } from "@udecode/plate-core";
import React, { useCallback, useState } from "react";
import {
  COLUMN_CONTAINER_KEY,
  COLUMN_ELEMENT_KEY,
} from "../ColumnSystem/ColumnSystemKeys";

export type ColumnElementType = {
  type: typeof COLUMN_ELEMENT_KEY;
  children: TDescendant[];
  createdAt: string;
  columnTemplate: string;
};

export type ColumnContainerType = {
  type: typeof COLUMN_CONTAINER_KEY;
  children: ColumnElementType[];
  createdAt: string;
};

export type ColumnSystemType = {
  type: "p";
  children: ColumnContainerType[];
};

function AddColumnsButton() {
  const [value, setValue] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const editor = useEditorRef();

  const insert = useCallback(() => {
    if (value) {
      const node: ColumnSystemType = {
        type: "p",

        children: [
          {
            type: COLUMN_CONTAINER_KEY,
            createdAt: new Date().toISOString(),
            children: value.split("-").map((template) => ({
              type: COLUMN_ELEMENT_KEY,
              children: [{ type: "p", children: [{ text: "" }] }],
              columnTemplate: template,
              createdAt: new Date().toISOString(),
            })),
          },
        ],
      };
      editor.insertNode<ColumnSystemType>(node);
    }
    setOpen(false);
  }, [editor, value]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ToolbarButton tooltip="Inserer une colone">
          <Icons.columns />
        </ToolbarButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inserer des colones</DialogTitle>
          <DialogDescription>
            Veuillez choisir le format de colonne a inserer
          </DialogDescription>
        </DialogHeader>
        <RadioGroup defaultValue="comfortable" onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/2-1/2" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/2 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/2 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2/3-1/3" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-2/3 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/3 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/3-2/3" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/3 h-4 bg-slate-800 rounded-xl" />
                <div className="w-2/3 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3/4-1/4" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-3/4 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/4-3/4" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
                <div className="w-3/4 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/3-1/3-1/3" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/3 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/3 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/3 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/2-1/4-1/4" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/2 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/4-1/2-1/4" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/2 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1/4-1/4-1/2" id="r1" />
            <Label htmlFor="r1">
              <div className="flex flex-row gap-1 w-60 h-5">
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/4 h-4 bg-slate-800 rounded-xl" />
                <div className="w-1/2 h-4 bg-slate-800 rounded-xl" />
              </div>
            </Label>
          </div>
        </RadioGroup>

        <DialogFooter>
          <Button type="submit" onClick={insert}>
            Inserer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddColumnsButton;
