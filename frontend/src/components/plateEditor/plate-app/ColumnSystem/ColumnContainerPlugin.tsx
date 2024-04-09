import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { COLUMN_CONTAINER_KEY } from "./ColumnSystemKeys";

export const createColumnContainerElement = createPluginFactory({
  key: COLUMN_CONTAINER_KEY,
  isElement: true,
  isInline: false,
});

export function ColumnContainerElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  const element = useElement<any>();

  return (
    <PlateElement asChild className={className} {...props} id={element.id}>
      <div className="flex flex-row gap-2 my-2">{children}</div>
    </PlateElement>
  );
}
