import { Button } from "@/components/plate-ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import Image from "next/image";

import React from "react";
import { MdOutlineOpenInFull } from "react-icons/md";

function DrugDetailsComponent({ drug }: { drug: DrugHitInterface }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <MdOutlineOpenInFull />
        </Button>
      </SheetTrigger>
      <SheetContent className=" min-w-[35vw]">
        <SheetHeader>
          <SheetTitle>Details du médicament</SheetTitle>
          <SheetDescription>
            <Image
              placeholder="empty"
              src={`http://pharmnet-dz.com/${drug.img}`}
              alt={drug.nomCommercial}
              width={200}
              height={200}
            />
            <div className="grid grid-cols-3">
              <div>
                <strong>Nom comercial</strong>
              </div>
              <div className="col-span-2">{drug.nomCommercial}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong>DCI</strong>
              </div>
              <div className="col-span-2">{drug.DCI}</div>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <strong className="">Dosage</strong>
              </div>
              <div className="col-span-2">{drug.dosage}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Forme</strong>
              </div>
              <div className="col-span-2">{drug.forme}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Classe pharmacologique</strong>
              </div>
              <div className="col-span-2">{drug.classPharmaco}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Classe Thérapeutique</strong>
              </div>
              <div className="col-span-2">{drug.classTherapeutique}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Conditionnement</strong>
              </div>
              <div className="col-span-2">{drug.conditionnement}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">PPA</strong>
              </div>
              <div className="col-span-2">{drug.PPA}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Tarif de referance</strong>
              </div>
              <div className="col-span-2">{drug.TR}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Laboratoire</strong>
              </div>
              <div className="col-span-2">{drug.labo}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Couleur vignette</strong>
              </div>
              <div className="col-span-2">{drug.vignetteColor}</div>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <strong className="">Production locale</strong>
              </div>
              <div className="col-span-2">{drug.prodLocal ? "oui" : "non"}</div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <strong className="">Remboursable</strong>
              </div>
              <div className="col-span-2">
                {drug.remboursable ? "oui" : "non"}
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <strong className="">Commertialisé</strong>
              </div>
              <div className="col-span-2">
                {drug.comercialisé ? "oui" : "non"}
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div>
                <strong className="">Liste</strong>
              </div>
              <div className="col-span-2">{drug.liste}</div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default DrugDetailsComponent;
