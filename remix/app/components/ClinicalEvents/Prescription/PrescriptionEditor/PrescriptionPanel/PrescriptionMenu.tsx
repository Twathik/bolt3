import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import { Fragment, useCallback } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/lib/utils";
import { Button } from "@/ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/components/ui/dialog";
import PrescriptionPresentation from "./PrescriptionPresentation";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { DELETE_PRESCRIPTION_LAYOUT_COMMAND } from "../PrescriptionLayout/PrescriptionLayoutPlugin";

function PrescriptionMenu({
  prescription,
}: {
  prescription: DrugHitInterface;
}) {
  const [editor] = useLexicalComposerContext();
  const onDelete = useCallback(() => {
    editor.dispatchCommand(
      DELETE_PRESCRIPTION_LAYOUT_COMMAND,
      prescription.prescriptionId
    );
  }, [editor, prescription.prescriptionId]);
  return (
    <Menu as="div" className="relative flex-none">
      <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
        <span className="sr-only">Open options</span>
        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900 w-full text-left"
                    )}
                    variant="ghost">
                    Fiche
                  </Button>
                </DialogTrigger>
                <DialogContent className="min-w-[50vw]">
                  <DialogHeader>
                    <DialogTitle>{prescription.drugTemplate}</DialogTitle>
                    <DialogDescription>
                      <PrescriptionPresentation prescription={prescription} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Button
                onClick={onDelete}
                className={classNames(
                  active ? "bg-rose-200" : "",
                  "block px-3 py-1 text-sm leading- w-full text-left text-red-900"
                )}
                variant="ghost">
                Supprimer
              </Button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default PrescriptionMenu;
