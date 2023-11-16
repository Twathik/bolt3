"use client";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CharacterLimitPlugin } from "@lexical/react/LexicalCharacterLimitPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import LexicalClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { useEffect, useState } from "react";
import { CAN_USE_DOM } from "@/components/GeneralComponents/LexicalEditor/canUseDOM";
import { useSettings } from "@/components/GeneralComponents/LexicalEditor/context/SettingsContext";
import { useSharedHistoryContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedHistoryContext";
import TableCellNodes from "@/components/GeneralComponents/LexicalEditor/nodes/TableCellNodes";
import ActionsPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ActionsPlugin";
import AutocompletePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/AutocompletePlugin";
import AutoEmbedPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/AutoEmbedPlugin";
import AutoLinkPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/AutoLinkPlugin";
import CodeActionMenuPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/CodeActionMenuPlugin";
import CollapsiblePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/CollapsiblePlugin";
import ComponentPickerPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ComponentPickerPlugin";
import ContextMenuPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ContextMenuPlugin";
import DragDropPaste from "@/components/GeneralComponents/LexicalEditor/plugins/DragDropPastePlugin";
import DraggableBlockPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/DraggableBlockPlugin";
import FloatingLinkEditorPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/FloatingLinkEditorPlugin";
import FloatingTextFormatToolbarPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/FloatingTextFormatToolbarPlugin";
import ImagesPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ImagesPlugin";
import InlineImagePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/InlineImagePlugin";
import { LayoutPlugin } from "@/components/GeneralComponents/LexicalEditor/plugins/LayoutPlugin/LayoutPlugin";
import LinkPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/LinkPlugin";
import ListMaxIndentLevelPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ListMaxIndentLevelPlugin";
import { MaxLengthPlugin } from "@/components/GeneralComponents/LexicalEditor/plugins/MaxLengthPlugin";
import PageBreakPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/PageBreakPlugin";
import SpeechToTextPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/SpeechToTextPlugin";
import TabFocusPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TabFocusPlugin";
import TableCellActionMenuPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TableActionMenuPlugin";
import TableCellResizer from "@/components/GeneralComponents/LexicalEditor/plugins/TableCellResizer";
import TableOfContentsPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TableOfContentsPlugin";
import { TablePlugin as NewTablePlugin } from "@/components/GeneralComponents/LexicalEditor/plugins/TablePlugin";
import ToolbarPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ToolbarPlugin";
import TreeViewPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TreeViewPlugin";
import PlaygroundEditorTheme from "@/components/GeneralComponents/LexicalEditor/themes/PlaygroundEditorTheme";
import ContentEditable from "@/components/GeneralComponents/LexicalEditor/ui/ContentEditable";
import Placeholder from "@/components/GeneralComponents/LexicalEditor/ui/Placeholder";

export default function AppEditor(): JSX.Element {
  const { historyState } = useSharedHistoryContext();
  const {
    settings: {
      isAutocomplete,
      isMaxLength,
      isCharLimit,
      isCharLimitUtf8,
      isRichText,
      showTreeView,
      showTableOfContents,
      shouldUseLexicalContextMenu,
      tableCellMerge,
      tableCellBackgroundColor,
    },
  } = useSettings();

  const isEditable = useLexicalEditable();

  const placeholder = <Placeholder>{""}</Placeholder>;
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] =
    useState<boolean>(false);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const cellEditorConfig = {
    namespace: "Playground",
    nodes: [...TableCellNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia("(max-width: 1025px)").matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener("resize", updateViewPortWidth);

    return () => {
      window.removeEventListener("resize", updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);

  return (
    <>
      {isRichText && <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />}
      <div
        className={`editor-container ${showTreeView ? "tree-view" : ""} ${
          !isRichText ? "plain-text" : ""
        }`}>
        {isMaxLength && <MaxLengthPlugin maxLength={30} />}
        <DragDropPaste />
        <AutoFocusPlugin />
        <ClearEditorPlugin />
        <ComponentPickerPlugin />

        <AutoEmbedPlugin />

        <HashtagPlugin />
        {/* <KeywordsPlugin /> */}
        <SpeechToTextPlugin />
        <AutoLinkPlugin />

        {/* <CommentPlugin
          providerFactory={isCollab ? createWebsocketProvider : undefined}
        /> */}
        {isRichText ? (
          <>
            <HistoryPlugin externalHistoryState={historyState} />

            <RichTextPlugin
              contentEditable={
                <div className="editor-scroller">
                  <div className="editor px-3 pb-14" ref={onRef}>
                    <ContentEditable />
                  </div>
                </div>
              }
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />
            {/* <MarkdownShortcutPlugin /> */}
            {/* <CodeHighlightPlugin /> */}
            <ListPlugin />
            <CheckListPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <TablePlugin
              hasCellMerge={tableCellMerge}
              hasCellBackgroundColor={tableCellBackgroundColor}
            />
            <TableCellResizer />
            <NewTablePlugin cellEditorConfig={cellEditorConfig}>
              <AutoFocusPlugin />
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="TableNode__contentEditable" />
                }
                placeholder={null}
                ErrorBoundary={LexicalErrorBoundary}
              />

              <HistoryPlugin />
              <ImagesPlugin captionsEnabled={false} />
              <LinkPlugin />
              <LexicalClickableLinkPlugin />
              <FloatingTextFormatToolbarPlugin />
            </NewTablePlugin>
            <ImagesPlugin />
            <InlineImagePlugin />
            <LinkPlugin />
            {/* <PollPlugin />
            <TwitterPlugin />
            <YouTubePlugin />
            <FigmaPlugin /> */}
            {!isEditable && <LexicalClickableLinkPlugin />}
            <HorizontalRulePlugin />
            {/*  <EquationsPlugin />
            <ExcalidrawPlugin /> */}
            <TabFocusPlugin />
            <TabIndentationPlugin />
            <CollapsiblePlugin />
            <PageBreakPlugin />
            <LayoutPlugin />
            {floatingAnchorElem && !isSmallWidthViewport && (
              <>
                <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                <FloatingLinkEditorPlugin
                  anchorElem={floatingAnchorElem}
                  isLinkEditMode={isLinkEditMode}
                  setIsLinkEditMode={setIsLinkEditMode}
                />
                <TableCellActionMenuPlugin
                  anchorElem={floatingAnchorElem}
                  cellMerge={true}
                />
                <FloatingTextFormatToolbarPlugin
                  anchorElem={floatingAnchorElem}
                />
              </>
            )}
          </>
        ) : (
          <>
            <PlainTextPlugin
              contentEditable={<ContentEditable />}
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin externalHistoryState={historyState} />
          </>
        )}
        {(isCharLimit || isCharLimitUtf8) && (
          <CharacterLimitPlugin
            charset={isCharLimit ? "UTF-16" : "UTF-8"}
            maxLength={5}
          />
        )}
        {isAutocomplete && <AutocompletePlugin />}
        <div>{showTableOfContents && <TableOfContentsPlugin />}</div>
        {shouldUseLexicalContextMenu && <ContextMenuPlugin />}
        <ActionsPlugin isRichText={isRichText} />
      </div>
      {showTreeView && <TreeViewPlugin />}
    </>
  );
}
