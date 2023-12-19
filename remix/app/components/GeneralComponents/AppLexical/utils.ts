import { createRow, createUID } from "../LexicalEditor/nodes/TableNode";
import type { Cell, Row, Rows } from "../LexicalEditor/nodes/TableNode";
import type { DataTableConfiguration } from "./types";

export const emptyEditorJSON =
  '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';

export const emptyDataTableEditor = (data: DataTableConfiguration["data"]) =>
  JSON.stringify({
    root: {
      children: [
        {
          children: [],
          direction: null,
          format: "",
          indent: 0,
          type: "dataTable",
          data,
          version: 1,
        },
      ],
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  });

export function addTableSimpleHeader(text: string): string {
  return JSON.stringify({
    root: {
      children: [
        {
          children: [
            {
              version: 1,
              detail: 0,
              format: 1,
              mode: "normal",
              style: "",
              text,
              type: "text",
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
      ],
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  });
}

export const populateDataTableEditor = (
  data: DataTableConfiguration["data"],
  value: string | undefined
) =>
  JSON.stringify({
    root: {
      children: [
        {
          children: value
            ? [
                {
                  detail: 0,
                  format: 0,
                  mode: "normal",
                  style: "",
                  text: value,
                  type: "text",
                  version: 1,
                },
              ]
            : [],
          direction: null,
          format: "",
          indent: 0,
          type: "dataTable",
          data,
          version: 1,
        },
      ],
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  });

export const generateDataTableRows = ({
  configuration,
}: {
  configuration: DataTableConfiguration[];
}): Rows => {
  const rows: Rows = [];
  const headerRow: Row = createRow(150);
  const firstRow: Row = createRow(150);
  configuration.forEach((config) => {
    const HeaderCell: Cell = {
      colSpan: 1,
      id: createUID(),
      json: addTableSimpleHeader(config.paramHeader),
      type: "header",
      width: config.columnWidth,
    };
    headerRow.cells.push(HeaderCell);
    const dataCell: Cell = {
      colSpan: 1,
      id: createUID(),
      json: populateDataTableEditor(config.data, config.value),
      type: "normal",
      width: config.columnWidth,
    };

    firstRow.cells.push(dataCell);
  });

  rows.push(headerRow);
  rows.push(firstRow);
  return rows;
};
