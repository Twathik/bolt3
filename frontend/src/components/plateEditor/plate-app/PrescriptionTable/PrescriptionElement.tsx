import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { PRESCRIPTION_TABLE_KEY } from "./PrescriptionTableKey";

export const createPrescriptionElement = createPluginFactory({
  key: PRESCRIPTION_TABLE_KEY,
  isElement: true,
  isInline: false,
});

export function PrescriptionElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  const element = useElement<any>();

  return (
    <PlateElement asChild className={className} {...props} id={element.id}>
      <div className="grid grid-cols-12 gap-2 my-2">{children}</div>
    </PlateElement>
  );
}
