import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import React from "react";

function PrescriptionPresentation({
  prescription,
}: {
  prescription: DrugHitInterface;
}) {
  return (
    <div className="grid grid-flow-col">
      <div className=" col-span-6">
        <img
          className="h-80 w-80 flex-none rounded-full bg-gray-50"
          src={`http://pharmnet-dz.com/${prescription.img}`}
          alt=""
        />
      </div>
      <div className=" col-span-6 grid grid-flow-raw">
        <div>
          <strong>Laboratoire: </strong>
          {prescription.labo}
        </div>
        <div>
          <strong>Nom commercial: </strong>
          {prescription.nomCommercial}
        </div>
        <div>
          <strong>DCI: </strong>
          {prescription.DCI}
        </div>
        <div>
          <strong>Dosage: </strong>
          {prescription.dosage}
        </div>
        <div>
          <strong>Forme: </strong>
          {prescription.forme}
        </div>
        <div>
          <strong>Classe pharmacologique: </strong>
          {prescription.classPharmaco}
        </div>
        <div>
          <strong>Classe thérapeutique </strong>
          {prescription.classTherapeutique}
        </div>
        <div>
          <strong>Liste </strong>
          {prescription.liste}
        </div>
        <div>
          <strong>Prix en officine: </strong>
          {prescription.PPA}
        </div>

        <div>
          <strong>Tarif de reference: </strong>
          {prescription.TR}
        </div>
        <div>
          <strong>Commercialisé en officine: </strong>
          {prescription.comercialisé ? "Oui" : "Non"}
        </div>
        <div>
          <strong>Production locale: </strong>
          {prescription.prodLocal ? "Oui" : "Non"}
        </div>
        <div>
          <strong>Pays de production: </strong>
          {prescription.pays}
        </div>
      </div>
    </div>
  );
}

export default PrescriptionPresentation;
