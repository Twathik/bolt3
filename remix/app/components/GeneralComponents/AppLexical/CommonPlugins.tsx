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
import useLexicalEditable from "@lexical/react/useLexicalEditable";
import { useEffect, useState } from "react";
import { CAN_USE_DOM } from "@/components/GeneralComponents/LexicalEditor/shared/src/canUseDOM";

import { useSettings } from "@/components/GeneralComponents/LexicalEditor/context/SettingsContext";
import { useSharedHistoryContext } from "@/components/GeneralComponents/LexicalEditor/context/SharedHistoryContext";
import TableCellNodes from "@/components/GeneralComponents/LexicalEditor/nodes/TableCellNodes";
import ActionsPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ActionsPlugin";
import AutocompletePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/AutocompletePlugin";
import AutoEmbedPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/AutoEmbedPlugin";
import AutoLinkPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/AutoLinkPlugin";
import CodeActionMenuPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/CodeActionMenuPlugin";
import CodeHighlightPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/CodeHighlightPlugin";
import CollapsiblePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/CollapsiblePlugin";
import ComponentPickerPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ComponentPickerPlugin";
import ContextMenuPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ContextMenuPlugin";
import DragDropPaste from "@/components/GeneralComponents/LexicalEditor/plugins/DragDropPastePlugin";
import DraggableBlockPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/DraggableBlockPlugin";
import EmojiPickerPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/EmojiPickerPlugin";
import EmojisPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/EmojisPlugin";
import EquationsPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/EquationsPlugin";
import ExcalidrawPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ExcalidrawPlugin";
import FigmaPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/FigmaPlugin";
import FloatingLinkEditorPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/FloatingLinkEditorPlugin";
import FloatingTextFormatToolbarPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/FloatingTextFormatToolbarPlugin";
import ImagesPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ImagesPlugin";
import InlineImagePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/InlineImagePlugin";
import KeywordsPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/KeywordsPlugin";
import { LayoutPlugin } from "@/components/GeneralComponents/LexicalEditor/plugins/LayoutPlugin/LayoutPlugin";
import LinkPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/LinkPlugin";
import ListMaxIndentLevelPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ListMaxIndentLevelPlugin";
import { MaxLengthPlugin } from "@/components/GeneralComponents/LexicalEditor/plugins/MaxLengthPlugin";
import PageBreakPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/PageBreakPlugin";
import PollPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/PollPlugin";
import SpeechToTextPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/SpeechToTextPlugin";
import TabFocusPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TabFocusPlugin";
import TableCellActionMenuPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TableActionMenuPlugin";
import TableOfContentsPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TableOfContentsPlugin";
import ToolbarPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/ToolbarPlugin";
import TwitterPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TwitterPlugin";
import YouTubePlugin from "@/components/GeneralComponents/LexicalEditor/plugins/YouTubePlugin";
import PlaygroundEditorTheme from "@/components/GeneralComponents/LexicalEditor/themes/PlaygroundEditorTheme";
import ContentEditable from "@/components/GeneralComponents/LexicalEditor/ui/ContentEditable";
import Placeholder from "@/components/GeneralComponents/LexicalEditor/ui/Placeholder";

import { TablePlugin as NewTablePlugin } from "@/components/GeneralComponents/LexicalEditor/plugins/TablePlugin";
import TableCellResizerPlugin from "@/components/GeneralComponents/LexicalEditor/plugins/TableCellResizer";
import { DataTableNode } from "./Datatable/DataTableNode";
import CheckCellContentPlugin from "./Datatable/CheckCellContentPlugin";

function CommonPlugins() {
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
    },
  } = useSettings();
  const isEditable = useLexicalEditable();

  const placeholder = <Placeholder>{""}</Placeholder>;
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] =
    useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const cellEditorConfig = {
    namespace: "ClinicalEvent",
    nodes: [...TableCellNodes, DataTableNode],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

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
    <div className=" m-4 rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6 relative">
      {isRichText && <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />}
      <div
        className={`editor-container ${showTreeView ? "tree-view" : ""} ${
          !isRichText ? "plain-text" : ""
        } max-h-[65vh] overflow-y-auto`}>
        {isMaxLength && <MaxLengthPlugin maxLength={30} />}
        <DragDropPaste />
        <AutoFocusPlugin />
        <ClearEditorPlugin />
        <ComponentPickerPlugin />
        <EmojiPickerPlugin />
        <AutoEmbedPlugin />
        <EmojisPlugin />
        <HashtagPlugin />
        <KeywordsPlugin />
        <SpeechToTextPlugin />
        <AutoLinkPlugin />

        {isRichText ? (
          <>
            <HistoryPlugin externalHistoryState={historyState} />

            <RichTextPlugin
              contentEditable={
                <div className="editor-scroller">
                  <div className="editor" ref={onRef}>
                    <ContentEditable />
                  </div>
                </div>
              }
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />

            <CodeHighlightPlugin />
            <ListPlugin />
            <CheckListPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            {/* <TablePlugin
                hasCellMerge={tableCellMerge}
                hasCellBackgroundColor={tableCellBackgroundColor}
              /> */}
            <TableCellResizerPlugin />
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
              <CheckCellContentPlugin />
            </NewTablePlugin>

            <ImagesPlugin />
            <InlineImagePlugin />
            <LinkPlugin />
            <PollPlugin />
            <TwitterPlugin />
            <YouTubePlugin />
            <FigmaPlugin />
            {!isEditable && <LexicalClickableLinkPlugin />}
            <HorizontalRulePlugin />
            <EquationsPlugin />
            <ExcalidrawPlugin />
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
    </div>
  );
}

export default CommonPlugins;
