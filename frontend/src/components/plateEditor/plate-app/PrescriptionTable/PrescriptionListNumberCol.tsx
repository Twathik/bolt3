import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { PRESCRIPTION_LIST_NUMBER_COL } from "./PrescriptionTableKey";
import { classNames } from "@/lib/utils";

export const createPrescriptionListNumberCol = createPluginFactory({
  key: PRESCRIPTION_LIST_NUMBER_COL,
  isElement: true,
  isInline: false,
});

export function PrescriptionListNumberCol({
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
        "col-span-1 border-dotted border-[1px] border-slate-500"
      )}
      {...props}
      id={element.id}
      contentEditable={false}
    >
      <div>
        <span>
          {element.prescriptionNumber} -{children}
        </span>
      </div>
    </PlateElement>
  );
}
