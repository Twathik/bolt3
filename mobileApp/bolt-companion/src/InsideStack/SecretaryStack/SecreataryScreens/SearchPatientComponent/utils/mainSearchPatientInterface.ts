import React from "react";

export interface MainSearchPatientInterface {
  id: string;
}

export interface TogglePatientToListInterface
  extends MainSearchPatientInterface {
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}
