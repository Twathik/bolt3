/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import type { MenuTextMatch } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  useBasicTypeaheadTriggerMatch,
} from "@lexical/react/LexicalTypeaheadMenuPlugin";
import type { TextNode } from "lexical";
import { useCallback, useEffect, useMemo, useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { debounce } from "lodash-es";
import { $createDiagnosticNode } from "./DiagnosticNode";
import searchDiagnostic from "@/lib/typesense/searchDiagnostic";
import { useBoltStore } from "@/stores/boltStore";
import createTypesenseClient from "@/lib/typesense/typesense";

const PUNCTUATION =
  "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
const NAME = "\\b[A-Z][^\\s" + PUNCTUATION + "]";

const DocumentDiagnosticsRegex = {
  NAME,
  PUNCTUATION,
};

const PUNC = DocumentDiagnosticsRegex.PUNCTUATION;

const TRIGGERS = ["@"].join("");

// Chars we expect to see in a diagnostic (non-space, non-punctuation).
const VALID_CHARS = "[^" + TRIGGERS + PUNC + "\\s]";

// Non-standard series of chars. Each series must be preceded and followed by
// a valid char.
const VALID_JOINS =
  "(?:" +
  "\\.[ |$]|" + // E.g. "r. " in "Mr. Smith"
  " |" + // E.g. " " in "Josh Duck"
  "[" +
  PUNC +
  "]|" + // E.g. "-' in "Salier-Hellendag"
  ")";

const LENGTH_LIMIT = 75;

const AtSignDiagnosticsRegex = new RegExp(
  "(^|\\s|\\()(" +
    "[" +
    TRIGGERS +
    "]" +
    "((?:" +
    VALID_CHARS +
    VALID_JOINS +
    "){0," +
    LENGTH_LIMIT +
    "})" +
    ")$"
);

// 50 is the longest alias length limit.
const ALIAS_LENGTH_LIMIT = 50;

// Regex used to match alias.
const AtSignDiagnosticsRegexAliasRegex = new RegExp(
  "(^|\\s|\\()(" +
    "[" +
    TRIGGERS +
    "]" +
    "((?:" +
    VALID_CHARS +
    "){0," +
    ALIAS_LENGTH_LIMIT +
    "})" +
    ")$"
);

// At most, 5 suggestions are shown in the popup.
const SUGGESTION_LIST_LENGTH_LIMIT = 15;

const diagnosticsCache = new Map();

function useDiagnosticLookupService(diagnosticString: string | null) {
  const [results, setResults] = useState<Array<string>>([]);
  const user = useBoltStore((store) => store.user);

  const search = useCallback(
    (diagnosticString: string | null) => {
      if (diagnosticString) {
        const client = createTypesenseClient(user.searchApiKey);
        searchDiagnostic({
          client,
          searchParams: { query_string: diagnosticString },
        }).then((data) => {
          if (data) {
            const result = data.hits.map((e) => e.FormattedTitle);
            diagnosticsCache.set(diagnosticString, result);
            setResults(result);
          }
        });
      }
    },
    [user.searchApiKey]
  );
  const debouncedSearch = React.useRef(debounce(search, 500));

  useEffect(() => {
    const cachedResults = diagnosticsCache.get(diagnosticString);

    if (diagnosticString == null) {
      setResults([]);
      return;
    }

    if (cachedResults === null) {
      return;
    } else if (cachedResults !== undefined) {
      setResults(cachedResults);
      return;
    }

    diagnosticsCache.set(diagnosticString, null);
    debouncedSearch.current(diagnosticString);
  }, [diagnosticString]);

  return results;
}

function checkForAtSignDiagnostics(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  let match = AtSignDiagnosticsRegex.exec(text);

  if (match === null) {
    match = AtSignDiagnosticsRegexAliasRegex.exec(text);
  }
  if (match !== null) {
    // The strategy ignores leading whitespace but we need to know it's
    // length to add it to the leadOffset
    const maybeLeadingWhitespace = match[1];

    const matchingString = match[3];
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2],
      };
    }
  }
  return null;
}

function getPossibleMenuTextMatch(text: string): MenuTextMatch | null {
  return checkForAtSignDiagnostics(text, 1);
}

class DiagnosticMenuOption extends MenuOption {
  name: string;

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

function DiagnosticsTypeaheadMenuItem({
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
  option: DiagnosticMenuOption;
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return (
    <li
      key={option.key}
      tabIndex={-1}
      className={className}
      ref={option.setRefElement}
      role="option"
      aria-selected={isSelected}
      id={"typeahead-item-" + index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}>
      <span className="text">{option.name}</span>
    </li>
  );
}

export default function DiagnosticsPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  const [queryString, setQueryString] = useState<string | null>(null);

  const results = useDiagnosticLookupService(queryString);

  const checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch("/", {
    minLength: 0,
  });

  const options = useMemo(
    () =>
      results
        .map((result) => new DiagnosticMenuOption(result))
        .slice(0, SUGGESTION_LIST_LENGTH_LIMIT),
    [results]
  );

  const onSelectOption = useCallback(
    (
      selectedOption: DiagnosticMenuOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const diagnosticNode = $createDiagnosticNode(selectedOption.name);
        if (nodeToReplace) {
          nodeToReplace.replace(diagnosticNode);
        }
        diagnosticNode.select();
        closeMenu();
      });
    },
    [editor]
  );

  const checkForDiagnosticMatch = useCallback(
    (text: string) => {
      const slashMatch = checkForSlashTriggerMatch(text, editor);
      if (slashMatch !== null) {
        return null;
      }
      return getPossibleMenuTextMatch(text);
    },
    [checkForSlashTriggerMatch, editor]
  );

  return (
    <LexicalTypeaheadMenuPlugin<DiagnosticMenuOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForDiagnosticMatch}
      options={options}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) =>
        anchorElementRef.current && results.length
          ? ReactDOM.createPortal(
              <div className="typeahead-popover w-[300px]">
                <ul>
                  {options.map((option, i: number) => (
                    <DiagnosticsTypeaheadMenuItem
                      index={i}
                      isSelected={selectedIndex === i}
                      onClick={() => {
                        setHighlightedIndex(i);
                        selectOptionAndCleanUp(option);
                      }}
                      onMouseEnter={() => {
                        setHighlightedIndex(i);
                      }}
                      key={option.key}
                      option={option}
                    />
                  ))}
                </ul>
              </div>,
              anchorElementRef.current
            )
          : null
      }
    />
  );
}
