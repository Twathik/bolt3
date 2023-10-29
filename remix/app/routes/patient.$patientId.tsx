import PatientFolderBody from "@/components/PatientFolder/Body/PatientFolderBody";
import usePatientStore from "@/stores/patientStore";

function PatientFolder() {
  const { patient } = usePatientStore();
  console.log({ patient });

  return <PatientFolderBody patient={patient} />;
}

export default PatientFolder;
