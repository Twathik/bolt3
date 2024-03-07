import type { PlateEditor, TElement, Value } from "@udecode/plate-common";

const checkId = ({
  child,
  id,
  index,
  set,
  path,
}: {
  child: TElement;
  id: string;
  set: (params: { n: TElement; path: number[] }) => void;
  index: number;
  path: number[];
}): void => {
  const nodePath = [...path, index];
  if (child.id === id) {
    set({ n: child, path });
    return;
  } else {
    return child?.children?.forEach((c: any, i: number) =>
      checkId({ child: c, id, index: i, set, path: nodePath })
    );
  }
};
export const getNodeById = <V extends Value>(
  editor: PlateEditor<V>,
  id: string
): { n: TElement; path: number[] } | null => {
  let node: { n: TElement; path: number[] } | null = null;

  const set = ({ n, path }: { n: TElement; path: number[] }) => {
    node = { n, path };
  };

  editor.children?.forEach((child, index) => {
    checkId({ child, id, index, set, path: [index] });
  });

  return node;
};
