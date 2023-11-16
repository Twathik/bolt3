import RootMenuButton from "./RootMenuButton";

export interface patientFolderBottomMenuElementsInterface {
  button: React.ReactNode;
  id: string;
}

export const patientFolderBottomMenuElements = ({
  patientId,
}: {
  patientId: string;
}): patientFolderBottomMenuElementsInterface[][] => [
  [
    {
      id: "new_diag",
      button: (
        <RootMenuButton
          buttonTitle="Nouveau diagnostic"
          className="bg-cyan-900 hover:bg-cyan-700"
          errorMessage="Un nouveau diagnostic n'a pas pu être crée!"
          eventType="DIAGNOSTIC"
          patientId={patientId}
        />
      ),
    },
  ],
  [
    {
      id: "new_prescription",
      button: (
        <RootMenuButton
          buttonTitle="Ordonnance"
          className="bg-orange-400 hover:bg-orange-700"
          errorMessage="Un nouvelle ordonnace n'a pas pu être crée!"
          eventType="PRESCRIPTION"
          patientId={patientId}
        />
      ),
    },
  ],
];
