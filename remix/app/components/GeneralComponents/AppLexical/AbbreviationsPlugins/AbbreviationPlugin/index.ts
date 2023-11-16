/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { LexicalEditor } from "lexical";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TextNode } from "lexical";
import { useEffect } from "react";
import { $createAbbreviationNode, AbbreviationNode } from "./AbbreviationNode";

const abbreviations_list: Map<string, string> = new Map([
  ["HTA", "Hypertension artérielle"],
]);

function findAndTransformEmoji(node: TextNode): null | TextNode {
  const text = node.getTextContent();

  for (let i = 0; i < text.length; i++) {
    const emojiData =
      abbreviations_list.get(text[i]) ||
      abbreviations_list.get(text.slice(i, i + text.length));

    if (emojiData !== undefined) {
      let targetNode;

      if (i === 0) {
        [targetNode] = node.splitText(emojiData.length);
      } else {
        [, targetNode] = node.splitText(i, i + emojiData.length);
      }

      const emojiNode = $createAbbreviationNode("", emojiData);

      targetNode.replace(emojiNode).selectNext(emojiData.length);
      return emojiNode;
    }
  }

  return null;
}

function textNodeTransform(node: TextNode): void {
  let targetNode: TextNode | null = node;

  while (targetNode !== null) {
    if (!targetNode.isSimpleText()) {
      return;
    }

    targetNode = findAndTransformEmoji(targetNode);
  }
}

function useEmojis(editor: LexicalEditor): void {
  useEffect(() => {
    if (!editor.hasNodes([AbbreviationNode])) {
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    }

    return editor.registerNodeTransform(TextNode, textNodeTransform);
  }, [editor]);
}

export default function AbbreviationPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  useEmojis(editor);
  return null;
}
