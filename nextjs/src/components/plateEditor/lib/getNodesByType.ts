import type { PlateEditor, TElement, Value } from "@udecode/plate-common";
import type { NodeCustomTypes } from "./NodesCustomTypes";

const checkType = ({
  child,
  type,
  index,
  set,
  path,
}: {
  child: TElement;
  type: NodeCustomTypes;
  set: (params: { n: TElement; path: number[] }) => void;
  index: number;
  path: number[];
}) => {
  const nodePath = [...path, index];
  if (child.type === type) {
    set({ n: child, path });
  }
  child?.children?.forEach((c: any, i: number) =>
    checkType({ child: c, type, index: i, set, path: nodePath })
  );
};
export const getNodesByType = <V extends Value>(
  editor: PlateEditor<V>,
  type: NodeCustomTypes
): { n: TElement; path: number[] }[] => {
  let nodes: { n: TElement; path: number[] }[] = [];

  const set = ({ n, path }: { n: TElement; path: number[] }) => {
    nodes.push({ n, path });
  };
  editor.children?.forEach((child, index) => {
    checkType({ child, type, index, set, path: [index] });
  });

  return nodes;
};
