import type { RootMessageInterface } from "./MessageTypesInterface";

export interface EmptyTrashMessageInterface extends RootMessageInterface {
  type: "emptyTrash";
  global: false;
}
