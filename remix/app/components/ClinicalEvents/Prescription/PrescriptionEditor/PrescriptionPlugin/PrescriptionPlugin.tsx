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
import { useCallback, useMemo, useState } from "react";
import * as ReactDOM from "react-dom";

import { $createPrescriptionNode } from "./PrescriptionNode";

import { SUGGESTION_LIST_LENGTH_LIMIT } from "./PrescriptionPluginConsts";
import { usePrescriptionLookupService } from "./usePrescriptionLookupService";
import { getPossibleQueryMatch } from "./utils";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import { useBoltStore } from "@/stores/boltStore";

class PrescriptionMenuOption extends MenuOption {
  name: string;
  drug: DrugHitInterface;

  constructor(name: string, drug: DrugHitInterface) {
    super(name);
    this.name = drug.drugTemplate;
    this.drug = drug;
  }
}

function PrescriptionsTypeaheadMenuItem({
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
  option: PrescriptionMenuOption;
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

export default function PrescriptionsPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  const [queryString, setQueryString] = useState<string | null>(null);

  const results = usePrescriptionLookupService(queryString);

  const addPrescription = useBoltStore((store) => store.addPrescription);

  const checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch("/", {
    minLength: 0,
  });

  const options = useMemo(
    () =>
      results
        ? results.hits
            .map(
              (result) =>
                new PrescriptionMenuOption(result.drugTemplate, result)
            )
            .slice(0, SUGGESTION_LIST_LENGTH_LIMIT)
        : [],
    [results]
  );

  const onSelectOption = useCallback(
    (
      selectedOption: PrescriptionMenuOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void
    ) => {
      addPrescription({ ...selectedOption.drug });
      editor.update(() => {
        const prescriptionNode = $createPrescriptionNode(
          selectedOption.name,
          selectedOption.drug
        );

        if (nodeToReplace) {
          nodeToReplace.replace(prescriptionNode);
        }
        prescriptionNode.select();
        closeMenu();
      });
    },
    [addPrescription, editor]
  );

  const checkForPrescriptionMatch = useCallback(
    (text: string) => {
      const slashMatch = checkForSlashTriggerMatch(text, editor);
      if (slashMatch !== null) {
        return null;
      }
      return getPossibleQueryMatch(text);
    },
    [checkForSlashTriggerMatch, editor]
  );

  return (
    <LexicalTypeaheadMenuPlugin<PrescriptionMenuOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForPrescriptionMatch}
      options={options}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) =>
        anchorElementRef.current && results?.hits.length
          ? ReactDOM.createPortal(
              <div className="typeahead-popover w-[300px]">
                <ul>
                  {options.map((option, i: number) => (
                    <PrescriptionsTypeaheadMenuItem
                      index={i}
                      isSelected={selectedIndex === i}
                      onClick={() => {
                        setHighlightedIndex(i);
                        selectOptionAndCleanUp(option);
                      }}
                      onMouseEnter={() => {
                        setHighlightedIndex(i);
                      }}
                      key={option.drug.id}
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
