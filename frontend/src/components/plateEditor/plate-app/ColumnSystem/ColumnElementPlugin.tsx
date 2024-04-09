import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { classNames } from "@/lib/utils";
import { COLUMN_ELEMENT_KEY } from "./ColumnSystemKeys";

export const createColumnElementPlugin = createPluginFactory({
  key: COLUMN_ELEMENT_KEY,
  isElement: true,
  isInline: false,
});

export function ColumnElement({
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
        `w-${element.columnTemplate} border-dashed border-[1px] border-slate-500`
      )}
      {...props}
      id={element.id}
    >
      <div>{children}</div>
    </PlateElement>
  );
}
