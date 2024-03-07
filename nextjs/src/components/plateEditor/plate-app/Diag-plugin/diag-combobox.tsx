"use client";

import React, { useCallback, useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { cn } from "@udecode/cn";
import type {
  ComboboxContentProps,
  ComboboxProps,
} from "@udecode/plate-combobox";
import {
  comboboxActions,
  useActiveComboboxStore,
  useComboboxContent,
  useComboboxContentState,
  useComboboxControls,
  useComboboxSelectors,
} from "@udecode/plate-combobox";
import {
  useEditorRef,
  useEditorSelector,
  useEventEditorSelectors,
  usePlateSelectors,
} from "@udecode/plate-common";
import { createVirtualRef } from "@udecode/plate-floating";
import { useBoltStore } from "@/stores/boltStore";
import createTypesenseClient from "@/lib/typesense/typesense";
import searchDiagnostic from "@/lib/typesense/searchDiagnostic";
import { debounce } from "lodash-es";
import type { DiagnosticComboboxInterface } from "../../lib/plate-types";
import { ComboboxItem } from "../../../plate-ui/combobox";

export function DiagComboboxContent(props: ComboboxContentProps) {
  const {
    component: Component,
    items,
    portalElement,
    combobox,
    onRenderItem,
  } = props;
  const user = useBoltStore((store) => store.user);

  const editor = useEditorRef();

  const [filteredItems, setFilteredItems] = useState(items ?? []);

  const activeComboboxStore = useActiveComboboxStore()!;

  const state = useComboboxContentState({ items, combobox });
  const { menuProps, targetRange } = useComboboxContent(state);
  const searchString = useComboboxSelectors.text();

  const search = useCallback(
    (searchString: string | null) => {
      if (searchString && user) {
        const client = createTypesenseClient(user.searchApiKey);
        searchDiagnostic({
          client,
          searchParams: { query_string: searchString },
        }).then((data) => {
          if (data) {
            const result: DiagnosticComboboxInterface[] = data.hits.map(
              (e) => ({
                key: e.id,
                diagnosticId: e.id,
                text: e.FormattedTitle,
              })
            );
            setFilteredItems(result);
          }
        });
      }
    },
    [user]
  );
  const debouncedSearch = React.useRef(debounce(search, 500));

  useEffect(() => {
    if (searchString == null || searchString.length == 0) {
      setFilteredItems(items || []);
      return;
    }

    debouncedSearch.current(searchString);
  }, [items, searchString]);
  return (
    <Popover.Root open>
      <Popover.PopoverAnchor
        virtualRef={createVirtualRef(editor, targetRange ?? undefined)}
      />

      <Popover.Portal container={portalElement}>
        <Popover.Content
          {...menuProps}
          sideOffset={5}
          side="bottom"
          align="start"
          className={cn(
            "z-[500] m-0 max-h-[288px] w-[300px] overflow-scroll rounded-md bg-popover p-0 shadow-md"
          )}
          onOpenAutoFocus={(event) => event.preventDefault()}>
          {Component ? Component({ store: activeComboboxStore }) : null}

          {filteredItems?.map((item, index) => (
            <ComboboxItem
              key={item.key}
              item={item}
              combobox={combobox}
              index={index}
              onRenderItem={onRenderItem}
            />
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function DiagCombobox({
  id,
  trigger,
  searchPattern,
  onSelectItem,
  controlled,
  maxSuggestions,
  filter,
  sort,
  disabled: _disabled,
  ...props
}: ComboboxProps) {
  const storeItems = useComboboxSelectors.items();

  const disabled =
    _disabled ?? (storeItems.length === 0 && !props.items?.length);

  const focusedEditorId = useEventEditorSelectors.focus?.();
  const combobox = useComboboxControls();
  const activeId = useComboboxSelectors.activeId();
  const selectionDefined = useEditorSelector(
    (editor) => !!editor.selection,
    []
  );
  const editorId = usePlateSelectors().id();

  useEffect(() => {
    comboboxActions.setComboboxById({
      id,
      trigger,
      searchPattern,
      controlled,
      onSelectItem,
      maxSuggestions,
      filter,
      sort,
    });
  }, [
    id,
    trigger,
    searchPattern,
    controlled,
    onSelectItem,
    maxSuggestions,
    filter,
    sort,
  ]);

  if (
    !combobox ||
    !selectionDefined ||
    focusedEditorId !== editorId ||
    activeId !== id ||
    disabled
  ) {
    return null;
  }

  return <DiagComboboxContent combobox={combobox} {...props} />;
}
