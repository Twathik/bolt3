import type { Rows } from "../LexicalEditor/nodes/TableNode";

export type InsertDataTableCommandPayload = Readonly<{
  rows: Rows;
  tableContentType: string;
}>;

export type DataTableParmType = "number" | "string";

export type DataTable = {
  paramName: string;
  paramType: DataTableParmType;
};

export type DataTableConfiguration = {
  paramHeader: string;
  data: {
    paramName: string;
    paramType: DataTableParmType;
  };
  columnWidth: number;
  value?: string;
};
