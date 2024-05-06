import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { PRESCRIPTION_DRUG_COL } from "./PrescriptionTableKey";
import { classNames } from "@/lib/utils";

export const createPrescriptionDrugCol = createPluginFactory({
  key: PRESCRIPTION_DRUG_COL,
  isElement: true,
  isInline: false,
});

export function PrescriptionDrugCol({
  className,
  children,
  ...props
}: PlateElementProps) {
  const element = useElement<any>();

  return (
    <PlateElement
      asChild
      className={classNames(
        className ?? "",
        "col-span-6 border-dotted border-[1px] border-slate-500"
      )}
      {...props}
      id={element.id}
    >
      <div>{children}</div>
    </PlateElement>
  );
}
