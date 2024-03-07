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

import { InsertDropdownMenu } from "./insert-dropdown-menu";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { ModeDropdownMenu } from "./mode-dropdown-menu";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";
import { ToggleToolbarButton } from "./toggle-toolbar-button";
import type { menuItemsType } from "../PatientPage/PatientFolder/Body/BoltMenuButtons/menuItemstype";
import { BoltDropDownMenu } from "../plateEditor/plate-app/CustomButtons/BoltDropDownMenu";
import { ColorDropdownMenu } from "./color-dropdown-menu";
import { AlignDropdownMenu } from "./align-dropdown-menu";
import { LineHeightDropdownMenu } from "./line-height-dropdown-menu";
import { IndentListToolbarButton } from "./indent-list-toolbar-button";
import { OutdentToolbarButton } from "./outdent-toolbar-button";
import { IndentToolbarButton } from "./indent-toolbar-button";
import { LinkToolbarButton } from "./link-toolbar-button";
import { MediaToolbarButton } from "./media-toolbar-button";
import { TableDropdownMenu } from "./table-dropdown-menu";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { CommentToolbarButton } from "./comment-toolbar-button";
import { SaveToolBarButton } from "../plateEditor/plate-app/CustomButtons/SaveFolderToolBarButton";

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
