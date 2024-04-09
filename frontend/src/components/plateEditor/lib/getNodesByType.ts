import {
  isElement,
  type TDescendant,
  type TElement,
} from "@udecode/plate-common";
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
export const getNodesByType = ({
  nodesToCheck,
  type,
}: {
  nodesToCheck: TDescendant[];
  type: NodeCustomTypes;
}): { n: TElement; path: number[] }[] => {
  let nodes: { n: TElement; path: number[] }[] = [];

  const set = ({ n, path }: { n: TElement; path: number[] }) => {
    nodes.push({ n, path });
  };
  nodesToCheck.forEach((child, index) => {
    if (isElement(child)) {
      checkType({ child, type, index, set, path: [index] });
    }
  });

  return nodes;
};
