import React from "react";
import DrugListComponent from "./DrugListComponent";
import MedicalInteractions from "./MedicalInteractions";

function PrescriptionEventComponent() {
  return (
    <div className="flex p-10">
      <div className="w-2/3 ">
        <DrugListComponent />
      </div>
      <div className="w-1/3">
        <MedicalInteractions />
      </div>
    </div>
  );
}

export default PrescriptionEventComponent;
