import PatientFolderBody from "@/components/PatientFolder/Body/PatientFolderBody";

function PatientIndex({
  params: { patientId },
}: {
  params: { patientId: string };
}) {
  return <PatientFolderBody patientId={patientId} />;
}

export default PatientIndex;
