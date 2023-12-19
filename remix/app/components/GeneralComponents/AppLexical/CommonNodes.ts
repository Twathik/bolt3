import type { Klass, LexicalNode } from "lexical";
import { AutocompleteNode } from "@/components/GeneralComponents/LexicalEditor/nodes/AutocompleteNode";
import { EmojiNode } from "@/components/GeneralComponents/LexicalEditor/nodes/EmojiNode";
import { EquationNode } from "@/components/GeneralComponents/LexicalEditor/nodes/EquationNode";
import { FigmaNode } from "@/components/GeneralComponents/LexicalEditor/nodes/FigmaNode";
import { ImageNode } from "@/components/GeneralComponents/LexicalEditor/nodes/ImageNode";
import { KeywordNode } from "@/components/GeneralComponents/LexicalEditor/nodes/KeywordNode";
import { MentionNode } from "@/components/GeneralComponents/LexicalEditor/nodes/MentionNode";
import { PollNode } from "@/components/GeneralComponents/LexicalEditor/nodes/PollNode";
import { StickyNode } from "@/components/GeneralComponents/LexicalEditor/nodes/StickyNode";
import { TweetNode } from "@/components/GeneralComponents/LexicalEditor/nodes/TweetNode";
import { YouTubeNode } from "@/components/GeneralComponents/LexicalEditor/nodes/YouTubeNode";
import { CollapsibleContainerNode } from "@/components/GeneralComponents/LexicalEditor/plugins/CollapsiblePlugin/CollapsibleContainerNode";
import { CollapsibleContentNode } from "@/components/GeneralComponents/LexicalEditor/plugins/CollapsiblePlugin/CollapsibleContentNode";
import { CollapsibleTitleNode } from "@/components/GeneralComponents/LexicalEditor/plugins/CollapsiblePlugin/CollapsibleTitleNode";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { HashtagNode } from "@lexical/hashtag";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { MarkNode } from "@lexical/mark";
import { OverflowNode } from "@lexical/overflow";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LayoutContainerNode } from "@/components/GeneralComponents/LexicalEditor/nodes/LayoutContainerNode";
import { LayoutItemNode } from "@/components/GeneralComponents/LexicalEditor/nodes/LayoutItemNode";
import { InlineImageNode } from "../LexicalEditor/nodes/InlineImageNode";
import { ExcalidrawNode } from "../LexicalEditor/nodes/ExcalidrawNode";
import { PageBreakNode } from "../LexicalEditor/nodes/PageBreakNode";

import { TableCellNode, TableRowNode } from "@lexical/table";
import { TableNode } from "../LexicalEditor/nodes/TableNode";
import { DataTableNode } from "./Datatable/DataTableNode";

const CommonNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  TableNode,
  TableCellNode,
  TableRowNode,
  HashtagNode,
  CodeHighlightNode,
  AutoLinkNode,
  LinkNode,
  OverflowNode,
  PollNode,
  StickyNode,
  ImageNode,
  InlineImageNode,
  MentionNode,
  EmojiNode,
  ExcalidrawNode,
  EquationNode,
  AutocompleteNode,
  KeywordNode,
  HorizontalRuleNode,
  TweetNode,
  YouTubeNode,
  FigmaNode,
  MarkNode,
  CollapsibleContainerNode,
  CollapsibleContentNode,
  CollapsibleTitleNode,
  PageBreakNode,
  LayoutContainerNode,
  LayoutItemNode,
  DataTableNode,
];

export default CommonNodes;
