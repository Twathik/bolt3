import type { TNode } from "@udecode/plate-common";
import {
  applyDeepToNodes,
  defaultsDeepToNodes,
  isDefined,
  queryNode,
  someNode,
} from "@udecode/plate-common";
import type { PlateEditor } from "@udecode/plate-core";
import type { NodeIdPlugin } from "@udecode/plate-node-id";
import { castArray, cloneDeep } from "lodash";
import { v4 as uuid } from "uuid";

const withAppNodeId = (
  editor: PlateEditor,
  {
    idKey = "",
    filterText,
    filter,
    reuseId,
    allow,
    exclude,
    disableInsertOverrides,
    idCreator,
  }: NodeIdPlugin
) => {
  const { apply, insertNode, insertNodes } = editor;
  const idPropsCreator = () => ({ [idKey]: idCreator ? idCreator() : uuid() });
  const filterNode = (nodeEntry: any) => {
    var _a;
    return filter
      ? filter(nodeEntry) &&
          (!filterText ||
            ((_a = nodeEntry[0]) == null ? void 0 : _a.type) !== void 0)
      : true;
  };
  const removeIdFromNodeIfDuplicate = (node: any) => {
    if (
      !reuseId ||
      someNode(editor, { match: { [idKey]: node[idKey] }, at: [] })
    ) {
      delete node[idKey];
    }
  };
  const overrideIdIfSet = (node: any) => {
    if (isDefined(node._id)) {
      const id = node._id;
      delete node._id;
      if (!someNode(editor, { match: { [idKey]: id }, at: [] })) {
        node[idKey] = id;
      }
    }
  };
  const query = {
    filter: filterNode,
    allow,
    exclude,
  };
  editor.insertNodes = (_nodes, options) => {
    const nodes = castArray(_nodes);

    insertNodes(
      nodes.map((node: any) => {
        if (!disableInsertOverrides && node[idKey]) {
          node._id = node[idKey];
        }
        return node;
      }),
      options
    );
  };
  editor.insertNode = (node) => {
    if (!disableInsertOverrides && node[idKey]) {
      node._id = node[idKey];
    }
    insertNode(node);
  };
  editor.apply = (operation) => {
    if (operation.type === "insert_node") {
      const node = cloneDeep(operation.node);
      applyDeepToNodes({
        node,
        query,
        source: {},
        apply: removeIdFromNodeIfDuplicate,
      });
      defaultsDeepToNodes({
        node,
        path: operation.path,
        source: idPropsCreator,
        query,
      });
      if (!disableInsertOverrides) {
        applyDeepToNodes({
          node,
          query,
          source: {},
          apply: overrideIdIfSet,
        });
      }
      return apply({ ...operation, node });
    }
    if (operation.type === "split_node") {
      const node = operation.properties as TNode;
      //@ts-expect-error
      let id = operation.properties[idKey] as string;
      if (queryNode([node, operation.path], query)) {
        if (
          !reuseId ||
          id === void 0 ||
          someNode(editor, {
            match: { [idKey]: id },
            at: [],
          })
        ) {
          id = idCreator ? idCreator() : uuid();
        }
        return apply({ ...operation, properties: { [idKey]: id } });
      }
      if (id) {
        //@ts-expect-error
        delete operation.properties[idKey];
      }
    }
    return apply(operation);
  };
  return editor;
};

export default withAppNodeId;
