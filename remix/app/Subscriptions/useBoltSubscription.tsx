import { useSubscription } from "@/lib/wundergraph";
import { useToast } from "@/ui/components/ui/use-toast";
import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import { format, parseISO } from "date-fns";
import type { PatientSpotlight } from "@/stores/boltStoreType";

type operationTypes = "create" | "update" | "delete";

const useBoltSubscription = () => {
  const { toast } = useToast();
  const consultationId = useBoltStore((store) => store.consultationState.id);
  const { data, error } = useSubscription({
    operationName: "AppSubscription/globalSubscription",
    input: { subscriptionSpecificId: [consultationId ?? ""] },
  });
  const setPatient = useBoltStore((store) => store.setPatient);
  const setSecondaryDisplay = useBoltStore(
    (store) => store.setSecondaryDisplay
  );
  const updateModality = useBoltStore((store) => store.updateModalities);
  const addMobileDevice = useBoltStore((store) => store.addMobileDevice);
  const updateMobileDevice = useBoltStore((store) => store.updateMobileDevice);
  const removeMobileDevice = useBoltStore((store) => store.removeMobileDevice);

  const addClinicalEvent = useBoltStore((store) => store.addClinicalEvent);
  const updateClinicalEvent = useBoltStore(
    (store) => store.updateClinicalEvent
  );
  const removeClinicalEvent = useBoltStore(
    (store) => store.removeClinicalEvent
  );

  const addWorkingList = useBoltStore((store) => store.addWorkingList);
  const updateWorkingList = useBoltStore((store) => store.updateWorkingList);
  const removeWorkingList = useBoltStore((store) => store.removeWorkingList);

  const addPatientSpotlight = useBoltStore(
    (store) => store.addPatientSpotlight
  );
  const updatePatientSpotlight = useBoltStore(
    (store) => store.updatePatientSpotlight
  );
  const removePatientSpotlight = useBoltStore(
    (store) => store.removePatientSpotlight
  );

  const updateDisplayedList = useBoltStore((store) => store.setDisplayedList);

  useEffect(() => {
    if (data) {
      const payload = data.mainDb_appSubscription;

      const appPayload = JSON.parse(payload.appPayload);

      switch (payload.type) {
        case "patientUpdate":
          switch (appPayload.operation as operationTypes) {
            case "update":
              setPatient(appPayload.patient);
              break;
            default:
              break;
          }
          break;
        case "secondaryDisplay":
          setSecondaryDisplay(appPayload);
          break;
        case "modalityUpdate":
          updateModality(appPayload);

          break;
        case "mobileDeviceUpdate":
          switch (appPayload.operation as operationTypes) {
            case "create":
              addMobileDevice(appPayload.mobileDevice);
              break;
            case "update":
              updateMobileDevice(appPayload.mobileDevice);
              break;
            case "delete":
              removeMobileDevice(appPayload.mobileDevice);
              break;

            default:
              break;
          }
          break;
        case "clinicalEvents":
          switch (appPayload.operation as operationTypes) {
            case "create":
              addClinicalEvent(appPayload.clinicalEvent);
              break;
            case "update":
              updateClinicalEvent(appPayload.clinicalEvent);
              break;
            case "delete":
              removeClinicalEvent(appPayload.clinicalEvent);
              break;

            default:
              break;
          }
          break;
        case "workingLists":
          switch (appPayload.operation as operationTypes) {
            case "create":
              addWorkingList(appPayload.workingList);
              break;
            case "update":
              updateWorkingList(appPayload.workingList);
              break;
            case "delete":
              removeWorkingList(appPayload.workingList);
              break;

            default:
              break;
          }
          break;
        case "consultationLists":
          const payload: PatientSpotlight = {
            consultationList: appPayload.consultationList,
            patientId: appPayload.consultationList.patient.id,
            id: appPayload.consultationList.id,
            label: `${appPayload.consultationList.patient.lastName} ${appPayload.consultationList.patient.firstName}`,
            description: `DDN : ${format(
              parseISO(appPayload.consultationList.patient.ddn),
              "dd-MM-yyyy"
            )} - sexe: ${
              appPayload.consultationList.patient.sexe === "F"
                ? "Femme"
                : "Homme"
            }`,
          };

          switch (appPayload.operation as operationTypes) {
            case "create":
              addPatientSpotlight(payload);
              break;
            case "update":
              updatePatientSpotlight(payload);
              break;
            case "delete":
              removePatientSpotlight(payload);
              break;

            default:
              break;
          }
          updateDisplayedList(5);
          break;
        default:
          break;
      }
    }
  }, [
    addClinicalEvent,
    addMobileDevice,
    addPatientSpotlight,
    addWorkingList,
    data,
    removeClinicalEvent,
    removeMobileDevice,
    removePatientSpotlight,
    removeWorkingList,
    setPatient,
    setSecondaryDisplay,
    updateClinicalEvent,
    updateDisplayedList,
    updateMobileDevice,
    updateModality,
    updatePatientSpotlight,
    updateWorkingList,
  ]);
  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description:
          "Une erreur reseau est survenu, veuiller rafraichir la page!",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  return null;
};

export default useBoltSubscription;
