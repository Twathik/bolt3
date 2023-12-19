import type { DataTableGetDataTableConfigurationsResponseData } from "@/components/generated/models";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components/ui/accordion";
import SectionWidget from "./SectionWidget";

function WidgetsContainer({
  sections,
}: {
  sections: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"];
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((sec) => (
        <AccordionItem key={sec.id} value={sec.id}>
          <AccordionTrigger>{sec.sectionName}</AccordionTrigger>
          <AccordionContent>
            {sec.widgets.map((widget) => (
              <SectionWidget
                key={widget.id}
                widget={widget}
                tableContentType={sec.tableContentType}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default WidgetsContainer;
