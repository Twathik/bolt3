import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InsertWidgetButton from "./InsertWidgetButton";
import {
  PRESCRIPTION_DRUG_COL,
  PRESCRIPTION_FREQUENCY_COL,
  PRESCRIPTION_LIST_NUMBER_COL,
  PRESCRIPTION_QUANTITY_COL,
  PRESCRIPTION_TABLE_KEY,
} from "@/components/plateEditor/plate-app/PrescriptionTable/PrescriptionTableKey";

function PrescriptionWidgets() {
  return (
    <div className="shadow-2xl rounded-md m-2 p-2 border-slate-600 border-[1px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Prescription</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row justify-between items-center">
              <div>Ajouter une prescription</div>
              <InsertWidgetButton
                n={[
                  {
                    type: "p",
                    children: [
                      {
                        type: PRESCRIPTION_TABLE_KEY,
                        children: [
                          {
                            type: PRESCRIPTION_LIST_NUMBER_COL,
                            children: [{ text: "" }],
                          },
                          {
                            type: PRESCRIPTION_DRUG_COL,
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    text: "@",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: PRESCRIPTION_FREQUENCY_COL,
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    text: " /jour",
                                  },
                                ],

                                align: "center",
                              },
                            ],
                          },
                          {
                            type: PRESCRIPTION_QUANTITY_COL,
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    text: "QSP ",
                                  },
                                ],

                                align: "right",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "p",
                    children: [{ text: "" }],
                  },
                ]}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default PrescriptionWidgets;
