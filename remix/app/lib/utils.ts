import { type ClassValue, clsx } from "clsx";
import type { SerializedEditorState } from "lexical";
import { twMerge } from "tailwind-merge";
import type { DrugHitInterface } from "./interfaces/DrugsInterfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function getPropertyFromEditorState({
  editorState,
  propertyName,
  type,
}: {
  editorState: SerializedEditorState;
  type: "prescription";
  propertyName: "prescriptionName";
}): string[] {
  let values: string[] = [];
  const checkForPrescription = (e: any) => {
    if (e.type === type) {
      values.push(e[propertyName]);
    } else {
      e.children?.forEach((c: any) => checkForPrescription(c));
    }
  };
  editorState.root.children.forEach((e) => {
    checkForPrescription(e);
  });

  return values;
}

export function getPrescriptionFromEditorState({
  editorState,
}: {
  editorState: SerializedEditorState | undefined;
}): DrugHitInterface[] {
  let values: DrugHitInterface[] = [];
  const checkForPrescription = (e: any) => {
    if (e?.type === "prescription") {
      values.push(e["drug"]);
    } else {
      e.children?.forEach((c: any) => checkForPrescription(c));
    }
  };
  editorState?.root.children?.forEach((e) => {
    checkForPrescription(e);
  });

  return values;
}

export function getValues<T extends Record<string, any>>(obj: T) {
  return Object.values(obj) as [(typeof obj)[keyof T]];
}
