import type { PlateElementProps } from "@udecode/plate-common";
import {
  PlateElement,
  createPluginFactory,
  useElement,
} from "@udecode/plate-common";
import { PAGE_BREAK_KEY } from "./PageBreakKeys";

export const createPageBreakElement = createPluginFactory({
  key: PAGE_BREAK_KEY,
  isElement: true,
  isInline: false,
});

export function PageBreakElement({
  className,
  children,
  ...props
}: PlateElementProps) {
  const element = useElement<any>();

  return (
    <PlateElement
      asChild
      className={className}
      {...props}
      id={element.id}
      contentEditable={false}
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">
            Saut de page
          </span>
        </div>
        {children}
      </div>
    </PlateElement>
  );
}
