/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";
import { MARK_BG_COLOR, MARK_COLOR } from "@udecode/plate-font";
import { ListStyleType } from "@udecode/plate-indent-list";
import { ELEMENT_IMAGE } from "@udecode/plate-media";

import { Icons, iconVariants } from "@/components/icons";
import { AlignDropdownMenu } from "@/ui/components/plate-ui/align-dropdown-menu";
import { ColorDropdownMenu } from "@/ui/components/plate-ui/color-dropdown-menu";
import { CommentToolbarButton } from "@/ui/components/plate-ui/comment-toolbar-button";
import { IndentListToolbarButton } from "@/ui/components/plate-ui/indent-list-toolbar-button";
import { IndentToolbarButton } from "@/ui/components/plate-ui/indent-toolbar-button";
import { LineHeightDropdownMenu } from "@/ui/components/plate-ui/line-height-dropdown-menu";
import { LinkToolbarButton } from "@/ui/components/plate-ui/link-toolbar-button";
import { MediaToolbarButton } from "@/ui/components/plate-ui/media-toolbar-button";
import { MoreDropdownMenu } from "@/ui/components/plate-ui/more-dropdown-menu";
import { OutdentToolbarButton } from "@/ui/components/plate-ui/outdent-toolbar-button";
import { TableDropdownMenu } from "@/ui/components/plate-ui/table-dropdown-menu";

import { InsertDropdownMenu } from "./insert-dropdown-menu";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { ModeDropdownMenu } from "./mode-dropdown-menu";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";
import { ToggleToolbarButton } from "./toggle-toolbar-button";
import { BoltDropDownMenu } from "../plate-app/CustomButtons/BoltDropDownMenu";
import { SaveToolBarButton } from "../plate-app/CustomButtons/SaveFolderToolBarButton";
import type { menuItemsType } from "@/components/PatientFolder/Body/BoltMenuButtons/menuItemstype";

export function FixedToolbarButtons({
  boltMenu,
  saveCallback,
}: {
  boltMenu: menuItemsType[];
  saveCallback: () => Promise<void>;
}) {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: "translateX(calc(-1px))",
        }}>
        {!readOnly && (
          <>
            <ToolbarGroup>
              <BoltDropDownMenu boltMenu={boltMenu} />
            </ToolbarGroup>
            <ToolbarGroup noSeparator>
              <InsertDropdownMenu />
              <TurnIntoDropdownMenu />
            </ToolbarGroup>

            <ToolbarGroup>
              <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                <Icons.bold />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
                <Icons.italic />
              </MarkToolbarButton>
              <MarkToolbarButton
                tooltip="Underline (⌘+U)"
                nodeType={MARK_UNDERLINE}>
                <Icons.underline />
              </MarkToolbarButton>

              <MarkToolbarButton
                tooltip="Strikethrough (⌘+⇧+M)"
                nodeType={MARK_STRIKETHROUGH}>
                <Icons.strikethrough />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
                <Icons.code />
              </MarkToolbarButton>
            </ToolbarGroup>

            <ToolbarGroup>
              <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
                <Icons.color className={iconVariants({ variant: "toolbar" })} />
              </ColorDropdownMenu>
              <ColorDropdownMenu
                nodeType={MARK_BG_COLOR}
                tooltip="Highlight Color">
                <Icons.bg className={iconVariants({ variant: "toolbar" })} />
              </ColorDropdownMenu>
            </ToolbarGroup>

            <ToolbarGroup>
              <AlignDropdownMenu />

              <LineHeightDropdownMenu />

              <IndentListToolbarButton nodeType={ListStyleType.Disc} />
              <IndentListToolbarButton nodeType={ListStyleType.Decimal} />

              <OutdentToolbarButton />
              <IndentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
              <LinkToolbarButton />

              <MediaToolbarButton nodeType={ELEMENT_IMAGE} />

              <TableDropdownMenu />
              <ToggleToolbarButton />

              <MoreDropdownMenu />
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />

        <ToolbarGroup noSeparator>
          <CommentToolbarButton />
          <SaveToolBarButton saveCallback={saveCallback} />
          <ModeDropdownMenu />
        </ToolbarGroup>
      </div>
    </div>
  );
}
