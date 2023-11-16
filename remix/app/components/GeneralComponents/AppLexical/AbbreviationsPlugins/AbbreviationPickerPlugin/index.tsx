/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  useBasicTypeaheadTriggerMatch,
} from "@lexical/react/LexicalTypeaheadMenuPlugin";
import type { TextNode } from "lexical";
import { $createTextNode, $getSelection, $isRangeSelection } from "lexical";
import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import * as ReactDOM from "react-dom";

class AbbreviationOption extends MenuOption {
  title: string;
  description: string;

  constructor(abbreviation: string, description: string) {
    super(abbreviation);
    this.title = abbreviation;
    this.description = description;
  }
}
function AbbreviationItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option,
}: {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  option: AbbreviationOption;
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return (
    <li
      key={`${option.key}_${option.description}`}
      tabIndex={-1}
      className={className}
      ref={option.setRefElement}
      role="option"
      aria-selected={isSelected}
      id={"typeahead-item-" + index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}>
      <span className="text">{option.description}</span>
    </li>
  );
}

type AbbreviationType = {
  abbreviation: string;
  description: string;
};

const MAX_EMOJI_SUGGESTION_COUNT = 10;

export default function EmojiPickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const [queryString, setQueryString] = useState<string | null>(null);
  const [abbreviations, setAbbreviations] = useState<Array<AbbreviationType>>(
    []
  );

  useEffect(() => {
    // @ts-ignore
    import("./formattedAbbreviations.json").then((file) =>
      setAbbreviations(file.default)
    );
  }, []);

  const abbreviationOptions = useMemo(
    () =>
      abbreviations != null
        ? abbreviations.map(
            ({ abbreviation, description }) =>
              new AbbreviationOption(abbreviation, description)
          )
        : [],
    [abbreviations]
  );

  const checkForTriggerMatch = useBasicTypeaheadTriggerMatch("!", {
    minLength: 2,
  });

  const options: Array<AbbreviationOption> = useMemo(() => {
    return abbreviationOptions
      .filter((option: AbbreviationOption) => {
        return queryString != null
          ? new RegExp(queryString, "gi").exec(option.title)
          : AbbreviationOption;
      })
      .slice(0, MAX_EMOJI_SUGGESTION_COUNT);
  }, [abbreviationOptions, queryString]);

  const onSelectOption = useCallback(
    (
      selectedOption: AbbreviationOption,
      nodeToRemove: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const selection = $getSelection();

        if (!$isRangeSelection(selection) || selectedOption == null) {
          return;
        }

        if (nodeToRemove) {
          nodeToRemove.remove();
        }

        selection.insertNodes([$createTextNode(selectedOption.description)]);

        closeMenu();
      });
    },
    [editor]
  );

  return (
    <LexicalTypeaheadMenuPlugin
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForTriggerMatch}
      options={options}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) => {
        if (anchorElementRef.current == null || options.length === 0) {
          return null;
        }

        return anchorElementRef.current && options.length
          ? ReactDOM.createPortal(
              <div className="typeahead-popover emoji-menu">
                <ul>
                  {options.map((option: AbbreviationOption, index) => (
                    <div key={`${option.key}_${option.description}`}>
                      <AbbreviationItem
                        index={index}
                        isSelected={selectedIndex === index}
                        onClick={() => {
                          setHighlightedIndex(index);
                          selectOptionAndCleanUp(option);
                        }}
                        onMouseEnter={() => {
                          setHighlightedIndex(index);
                        }}
                        option={option}
                      />
                    </div>
                  ))}
                </ul>
              </div>,
              anchorElementRef.current
            )
          : null;
      }}
    />
  );
}
