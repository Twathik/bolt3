import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components/ui/accordion";
import InsertWidgetButton from "./InsertWidgetButton";
import type { DataInputElementType } from "@/ui/components/plate-app/DataInputs/DataInputUtils";

function ETTWidget() {
  return (
    <div className="shadow-2xl rounded-md m-2 p-2 border-slate-600 border-[1px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Fraction d'ejection</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row justify-between items-center">
              <div>Evaluation de la fraction d'ejection</div>
              <InsertWidgetButton
                n={
                  [
                    {
                      type: "data-input",
                      children: [{ text: "" }],
                      value: "test text",
                      inputType: "text",
                      inputName: "testTextInputName",
                      documentType: "SONOGRAPHY",
                      className: "max-w-40",
                    },
                    {
                      type: "data-input",
                      children: [{ text: "" }],
                      value: 20,
                      inputType: "number",
                      inputName: "testNumberInputName",
                      documentType: "SONOGRAPHY",
                      className: "max-w-40",
                    },
                    {
                      type: "data-input",
                      children: [{ text: "" }],
                      value: 1,
                      inputType: "checkbox",
                      inputName: "testCheckBoxInputName",
                      documentType: "SONOGRAPHY",
                      className: "max-w-40",
                      label: "test input",
                    },
                    {
                      type: "data-input",
                      children: [{ text: "" }],
                      value: "",
                      inputType: "select",
                      inputName: "testSelectInputName",
                      documentType: "SONOGRAPHY",
                      className: "max-w-40",
                      label: "test input",
                      options: [
                        { value: "option1", label: "option 1" },
                        { value: "option2", label: "option 2" },
                      ],
                    },
                    {
                      type: "data-input",
                      children: [{ text: "" }],
                      value: "",
                      inputType: "date",
                      inputName: "testDateInputName",
                      documentType: "SONOGRAPHY",
                      className: "max-w-40",
                    },
                    {
                      type: "data-input",
                      children: [{ text: "" }],
                      value: "",
                      inputType: "multiple",
                      inputName: "testMultiSelectInputName",
                      documentType: "SONOGRAPHY",
                      className: "max-w-40",
                      label: "test input",
                      options: [
                        { value: "option1", label: "option 1" },
                        { value: "option2", label: "option 2" },
                      ],
                    },
                  ] as DataInputElementType[]
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ETTWidget;
