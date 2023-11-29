import { useBoltStore } from "@/stores/boltStore";
import { BeatLoader } from "react-spinners";

function LoadingPrescriptionComponent() {
  const loadingPrescription = useBoltStore(
    (store) => store.loadingPrescription
  );
  return (
    <div>
      {loadingPrescription && (
        <div className="flex items-middle justify-center align-middle gap-4">
          <div>Recherche en cours</div>{" "}
          <BeatLoader size={7} className="m-auto" />
        </div>
      )}
    </div>
  );
}

export default LoadingPrescriptionComponent;
