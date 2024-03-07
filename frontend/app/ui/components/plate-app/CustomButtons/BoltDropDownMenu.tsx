/* eslint-disable react/jsx-pascal-case */
"use client";

import React from "react";
import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import {
  focusEditor,
  insertEmptyElement,
  useEditorRef,
} from "@udecode/plate-common";

import { Icons } from "@/components/icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from "../../plate-ui/dropdown-menu";
import { ToolbarButton } from "../../plate-ui/toolbar";
import { insertDocumentHeader } from "../Documents/DocumentHeaderUtils";
import { DOCUMENT_HEADER_KEY } from "../Documents/DocumentsKeys";
import { insertEmptyParagraphNode } from "../../plateEditor/lib/insertEmptyParagraphNode";
import { useBoltStore } from "@/stores/boltStore";
import { useMutation } from "@/lib/wundergraph";
import { useToast } from "../../ui/use-toast";
import type { menuItemsType } from "@/components/PatientFolder/Body/BoltMenuButtons/menuItemstype";

export function BoltDropDownMenu(
  props: DropdownMenuProps & { boltMenu: menuItemsType[] }
) {
  const editor = useEditorRef();
  const { boltMenu, ...otherProps } = props;
  const openState = useOpenState();
  const addDocumentHeader = useBoltStore((s) => s.addDocumentHeader);
  const patient = useBoltStore((s) => s.patient);
  const { toast } = useToast();
  const { trigger } = useMutation({
    operationName: "clinicalEvents/createOneClinicalEvent",
    onError: () => {
      toast({
        title: "Une erreur est survenue",
        description: "Le document n'a pas pu être crée",
        variant: "destructive",
      });
    },
  });

  return (
    <DropdownMenu modal={false} {...openState} {...otherProps}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip="Insert" isDropdown>
          <Icons.add /> Document
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto">
        {boltMenu.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems?.map(
              ({
                value: type,
                label: itemLabel,
                icon: Icon,
                documentType,
                eventCategory,
              }) => (
                <DropdownMenuItem
                  key={`${type}-${documentType}`}
                  className="min-w-[180px]"
                  onSelect={async () => {
                    if (patient) {
                      switch (type) {
                        case DOCUMENT_HEADER_KEY:
                          const data = await trigger({
                            eventType: documentType,
                            patientId: patient.id,
                            eventCategory,
                          });
                          if (data?.mainDb_createOneClinicalEvent) {
                            insertDocumentHeader({
                              editor,
                              addDocumentHeader,
                              documentType,
                              clinicalEventId:
                                data.mainDb_createOneClinicalEvent.id,
                            });
                          }

                          break;

                        default:
                          insertEmptyElement(editor, type, {
                            select: true,
                            nextBlock: true,
                          });
                          break;
                      }
                      insertEmptyParagraphNode(editor);
                      focusEditor(editor);
                    }
                  }}>
                  <Icon className="mr-2 h-5 w-5" />
                  {itemLabel}
                </DropdownMenuItem>
              )
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
