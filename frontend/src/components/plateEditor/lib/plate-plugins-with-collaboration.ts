import { withProps } from "@udecode/cn";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import {
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import {
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from "@udecode/plate-block-quote";
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import { createCaptionPlugin } from "@udecode/plate-caption";
import {
  createCodeBlockPlugin,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  unwrapCodeBlock,
} from "@udecode/plate-code-block";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import { MARK_COMMENT } from "@udecode/plate-comments";
import type { RenderAfterEditable } from "@udecode/plate-common";
import {
  createPlugins,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  PlateElement,
  PlateLeaf,
  someNode,
} from "@udecode/plate-common";
import { createDndPlugin } from "@udecode/plate-dnd";
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from "@udecode/plate-excalidraw";
import {
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
} from "@udecode/plate-font";
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  KEYS_HEADING,
} from "@udecode/plate-heading";
import {
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from "@udecode/plate-highlight";
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from "@udecode/plate-horizontal-rule";
import { createIndentPlugin } from "@udecode/plate-indent";
import {
  createIndentListPlugin,
  KEY_LIST_STYLE_TYPE,
} from "@udecode/plate-indent-list";
import { createJuicePlugin } from "@udecode/plate-juice";
import { createKbdPlugin, MARK_KBD } from "@udecode/plate-kbd";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import {
  createTodoListPlugin,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
} from "@udecode/plate-list";
import {
  createImagePlugin,
  createMediaEmbedPlugin,
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
} from "@udecode/plate-media";
import {
  createMentionPlugin,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
} from "@udecode/plate-mention";
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
} from "@udecode/plate-table";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";

import { autoformatPlugin } from "@/components/plateEditor/lib/autoformatPlugin";
import { dragOverCursorPlugin } from "@/components/plateEditor/lib/dragOverCursorPlugin";
import { BlockquoteElement } from "@/components/plate-ui/blockquote-element";
import { CodeBlockElement } from "@/components/plate-ui/code-block-element";
import { CodeLeaf } from "@/components/plate-ui/code-leaf";
import { CodeLineElement } from "@/components/plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "@/components/plate-ui/code-syntax-leaf";
import { CommentLeaf } from "@/components/plate-ui/comment-leaf";

import { ExcalidrawElement } from "@/components/plate-ui/excalidraw-element";
import { HeadingElement } from "@/components/plate-ui/heading-element";
import { HighlightLeaf } from "@/components/plate-ui/highlight-leaf";
import { HrElement } from "@/components/plate-ui/hr-element";
import { ImageElement } from "@/components/plate-ui/image-element";
import { KbdLeaf } from "@/components/plate-ui/kbd-leaf";
import { LinkElement } from "@/components/plate-ui/link-element";
import { LinkFloatingToolbar } from "@/components/plate-ui/link-floating-toolbar";
import { ListElement } from "@/components/plate-ui/list-element";
import { MediaEmbedElement } from "@/components/plate-ui/media-embed-element";
import { MentionElement } from "@/components/plate-ui/mention-element";
import { MentionInputElement } from "@/components/plate-ui/mention-input-element";
import { ParagraphElement } from "@/components/plate-ui/paragraph-element";
import { withPlaceholders } from "@/components/plate-ui/placeholder";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "@/components/plate-ui/table-cell-element";
import { TableElement } from "@/components/plate-ui/table-element";
import { TableRowElement } from "@/components/plate-ui/table-row-element";
import { TodoListElement } from "@/components/plate-ui/todo-list-element";
import { withDraggables } from "@/components/plate-ui/with-draggables";
import { TabbableElement } from "./tabbable-element";
import { DIAGNOSTIC_MENTION_KEY } from "../plate-app/Diag-plugin/diag-plugin-key";
import { DrugMentionKey } from "../plate-app/Drug-plugin/drug-plugin-key";
import { createTogglePlugin, ELEMENT_TOGGLE } from "@udecode/plate-toggle";
import { ToggleElement } from "@/components/plate-ui/toggle-element";
import {
  createDataInputPlugin,
  DataInputElement,
} from "../plate-app/DataInputs/DataInputPlugin";

import {
  createDocumentHeaderPlugin,
  DocumentHeaderElement,
} from "../plate-app/Documents/DocumentHeaderElement";
import { DOCUMENT_HEADER_KEY } from "../plate-app/Documents/DocumentsKeys";
import withPreventHeadersModifications from "./AppOverrides/deletionProtect";
import { DATA_INPUT_ELEMENT } from "../plate-app/DataInputs/DataInputKeys";
import {
  PRESCRIPTION_DRUG_COL,
  PRESCRIPTION_FREQUENCY_COL,
  PRESCRIPTION_LIST_NUMBER_COL,
  PRESCRIPTION_QUANTITY_COL,
  PRESCRIPTION_TABLE_KEY,
} from "../plate-app/PrescriptionTable/PrescriptionTableKey";
import {
  createPrescriptionElement,
  PrescriptionElement,
} from "../plate-app/PrescriptionTable/PrescriptionElement";
import {
  createPrescriptionDrugCol,
  PrescriptionDrugCol,
} from "../plate-app/PrescriptionTable/PrescriptionDrugCol";
import {
  createPrescriptionFrequencyCol,
  PrescriptionFrequencyCol,
} from "../plate-app/PrescriptionTable/PrescriptionFrequencyCol";
import {
  createPrescriptionQuantityCol,
  PrescriptionQuantityCol,
} from "../plate-app/PrescriptionTable/PrescriptionQuentityCol";
import { createYjsPlugin } from "@udecode/plate-yjs";
import normalizeCollaboration from "./normalizeCollaboration";
import type { BoltUser } from "@/stores/boltStoreType";
import {
  createPrescriptionListNumberCol,
  PrescriptionListNumberCol,
} from "../plate-app/PrescriptionTable/PrescriptionListNumberCol";
import {
  ColumnElement,
  createColumnElementPlugin,
} from "../plate-app/ColumnSystem/ColumnElementPlugin";
import {
  COLUMN_CONTAINER_KEY,
  COLUMN_ELEMENT_KEY,
} from "../plate-app/ColumnSystem/ColumnSystemKeys";
import {
  ColumnContainerElement,
  createColumnContainerElement,
} from "../plate-app/ColumnSystem/ColumnContainerPlugin";
import {
  createPageBreakElement,
  PageBreakElement,
} from "../plate-app/PageBreak/PageBreakPlugin";
import { PAGE_BREAK_KEY } from "../plate-app/PageBreak/PageBreakKeys";

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

const resetBlockTypesCodeBlockRule = {
  types: [ELEMENT_CODE_BLOCK],
  defaultType: ELEMENT_PARAGRAPH,
  onReset: unwrapCodeBlock,
};

export const platePluginsWithCollaboration = ({
  user,
  documentName,
}: {
  user: BoltUser | null;
  documentName: string;
}) => {
  return createPlugins(
    [
      // Nodes
      createParagraphPlugin({ withOverrides: normalizeCollaboration }),
      createHeadingPlugin(),
      createBlockquotePlugin(),
      createCodeBlockPlugin(),
      createHorizontalRulePlugin(),
      createLinkPlugin({
        renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
      }),
      createImagePlugin(),
      createMediaEmbedPlugin(),
      createCaptionPlugin({
        options: { pluginKeys: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED] },
      }),
      /* createMentionPlugin(), */

      createTablePlugin(),

      createTodoListPlugin(),
      createExcalidrawPlugin({ enabled: true, options: {} }),

      // Marks
      createBoldPlugin(),
      createItalicPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createCodePlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createFontSizePlugin(),
      createHighlightPlugin(),
      createKbdPlugin(),

      // Block Style
      createAlignPlugin({
        inject: {
          props: {
            validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
          },
        },
      }),
      createIndentPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              ELEMENT_H1,
              ELEMENT_H2,
              ELEMENT_H3,
              ELEMENT_BLOCKQUOTE,
              ELEMENT_CODE_BLOCK,
              ELEMENT_TOGGLE,
              // DIAGNOSTIC_DOCUMENT_KEY,
            ],
          },
        },
      }),
      createIndentListPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              ELEMENT_H1,
              ELEMENT_H2,
              ELEMENT_H3,
              ELEMENT_BLOCKQUOTE,
              ELEMENT_CODE_BLOCK,
            ],
          },
        },
      }),
      createLineHeightPlugin({
        inject: {
          props: {
            defaultNodeValue: 1.5,
            validNodeValues: [1, 1.2, 1.5, 2, 3],
            validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
          },
        },
      }),

      // Functionality
      createAutoformatPlugin(autoformatPlugin),
      createBlockSelectionPlugin({
        options: {
          sizes: {
            top: 0,
            bottom: 0,
          },
        },
      }),
      createComboboxPlugin(),
      createDndPlugin({
        options: { enableScroller: true, scrollerProps: {} },
      }),
      /* createEmojiPlugin({
      renderAfterEditable: EmojiCombobox as RenderAfterEditable,
    }), */
      createExitBreakPlugin({
        options: {
          rules: [
            {
              hotkey: "mod+enter",
            },
            {
              hotkey: "mod+shift+enter",
              before: true,
            },
            {
              hotkey: "enter",
              query: {
                start: true,
                end: true,
                allow: KEYS_HEADING,
              },
              relative: true,
              level: 1,
            },
          ],
        },
      }),
      // createNodeIdPlugin(),
      createResetNodePlugin({
        options: {
          rules: [
            {
              ...resetBlockTypesCommonRule,
              hotkey: "Enter",
              predicate: isBlockAboveEmpty,
            },
            {
              ...resetBlockTypesCommonRule,
              hotkey: "Backspace",
              predicate: isSelectionAtBlockStart,
            },
            {
              ...resetBlockTypesCodeBlockRule,
              hotkey: "Enter",
              predicate: isCodeBlockEmpty,
            },
            {
              ...resetBlockTypesCodeBlockRule,
              hotkey: "Backspace",
              predicate: isSelectionAtCodeBlockStart,
            },
          ],
        },
      }),
      createSelectOnBackspacePlugin({
        options: {
          query: {
            allow: [ELEMENT_IMAGE, ELEMENT_HR, ELEMENT_EXCALIDRAW],
          },
        },
      }),

      createSoftBreakPlugin({
        options: {
          rules: [
            { hotkey: "shift+enter" },
            {
              hotkey: "enter",
              query: {
                allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
              },
            },
          ],
        },
      }),
      createTabbablePlugin({
        options: {
          query: (editor) => {
            if (isSelectionAtBlockStart(editor)) return false;

            return !someNode(editor, {
              match: (n) => {
                return !!(
                  n.type &&
                  ([ELEMENT_TABLE, ELEMENT_LI, ELEMENT_CODE_BLOCK].includes(
                    n.type as string
                  ) ||
                    n[KEY_LIST_STYLE_TYPE])
                );
              },
            });
          },
        },
        plugins: [
          {
            key: "tabbable_element",
            isElement: true,
            isVoid: true,
            component: TabbableElement,
          },
        ],
      }),
      createTrailingBlockPlugin({
        options: { type: ELEMENT_PARAGRAPH },
      }),
      dragOverCursorPlugin,

      // Collaboration
      // createCommentsPlugin(),
      createYjsPlugin({
        // withOverrides: normalizeCollaboration,
        options: {
          disableCursors: false,
          cursorOptions: { autoSend: true, data: { user } },
          hocuspocusProviderOptions: {
            url: "ws://127.0.0.1:1234", // hocuspocus url
            name: documentName, // room name
            token: user?.editorApiKey ?? "test",
          },
        },
      }),
      // Deserialization
      createDeserializeDocxPlugin(),
      createDeserializeMdPlugin(),
      createJuicePlugin(),
      createTogglePlugin({}),
      createMentionPlugin({
        key: DIAGNOSTIC_MENTION_KEY,

        options: {
          trigger: "d",
          triggerPreviousCharPattern: new RegExp("^@$"),
        },
      }),
      createMentionPlugin({
        key: DrugMentionKey,

        options: {
          trigger: "m",
          triggerPreviousCharPattern: new RegExp("^@$"),
        },
      }),
      createDataInputPlugin(),
      createDocumentHeaderPlugin({
        key: DOCUMENT_HEADER_KEY,
        withOverrides: withPreventHeadersModifications,
        options: {
          documentType: "Diagnostics du patient",
        },
      }),
      createPrescriptionElement(),
      createPrescriptionDrugCol(),
      createPrescriptionFrequencyCol(),
      createPrescriptionQuantityCol(),
      createPrescriptionListNumberCol(),
      createColumnElementPlugin(),
      createColumnContainerElement(),
      createPageBreakElement(),

      /* createTogglePlugin({
      key: DIAGNOSTIC_DOCUMENT_KEY,
    }), */
    ],
    {
      components: withDraggables(
        withPlaceholders({
          [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
          [ELEMENT_CODE_BLOCK]: CodeBlockElement,
          [ELEMENT_CODE_LINE]: CodeLineElement,
          [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
          [ELEMENT_HR]: HrElement,
          [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
          [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
          [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
          [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
          [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
          [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
          [ELEMENT_IMAGE]: ImageElement,
          [ELEMENT_LI]: withProps(PlateElement, { as: "li" }),
          [ELEMENT_LINK]: LinkElement,
          [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
          [ELEMENT_MENTION]: MentionElement,
          [ELEMENT_MENTION_INPUT]: MentionInputElement,
          [ELEMENT_UL]: withProps(ListElement, { variant: "ul" }),
          [ELEMENT_OL]: withProps(ListElement, { variant: "ol" }),
          [ELEMENT_PARAGRAPH]: ParagraphElement,
          [ELEMENT_TABLE]: TableElement,
          [ELEMENT_TD]: TableCellElement,
          [ELEMENT_TH]: TableCellHeaderElement,
          [ELEMENT_TODO_LI]: TodoListElement,
          [ELEMENT_TR]: TableRowElement,
          [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
          [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
          [MARK_CODE]: CodeLeaf,
          [MARK_HIGHLIGHT]: HighlightLeaf,
          [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
          [MARK_KBD]: KbdLeaf,
          [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
          [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
          [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
          [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
          [MARK_COMMENT]: CommentLeaf,
          [ELEMENT_TOGGLE]: ToggleElement,
          [DIAGNOSTIC_MENTION_KEY]: MentionElement,
          [DrugMentionKey]: MentionElement,
          [DATA_INPUT_ELEMENT]: DataInputElement,
          [DOCUMENT_HEADER_KEY]: DocumentHeaderElement,
          [PRESCRIPTION_TABLE_KEY]: PrescriptionElement,
          [PRESCRIPTION_DRUG_COL]: PrescriptionDrugCol,
          [PRESCRIPTION_FREQUENCY_COL]: PrescriptionFrequencyCol,
          [PRESCRIPTION_QUANTITY_COL]: PrescriptionQuantityCol,
          [PRESCRIPTION_LIST_NUMBER_COL]: PrescriptionListNumberCol,
          [COLUMN_CONTAINER_KEY]: ColumnContainerElement,
          [COLUMN_ELEMENT_KEY]: ColumnElement,
          [PAGE_BREAK_KEY]: PageBreakElement,

          // [DIAGNOSTIC_DOCUMENT_KEY]: ToggleElement,
        })
      ),
    }
  );
};
