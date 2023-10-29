import BottomPatientNavBar from "@/components/PatientFolder/BottomNavbar/BottomPatientNavBar";
import PatientHeaderBar from "@/components/PatientFolder/Header/PatientHeaderBar";
import { cookies } from "next/headers";
import type { Metadata, ResolvingMetadata } from "next";
import { PatientSSR } from "@/components/PatientFolder/utils/Patient_SSR";

type Props = {
  params: { patientId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const patientId = params.patientId;

  const SSR = new PatientSSR(cookies);

  // fetch data
  try {
    const patient = await SSR.getPatient({ patientId });

    return {
      title: `${patient?.lastName ?? "dossier"} ${
        patient?.firstName ?? "patient"
      }`,
      description: `dossier du patient : ${patient?.lastName ?? "dossier"} ${
        patient?.firstName ?? "patient"
      }`,
    };
  } catch (error) {
    return {
      title: "Not found",
    };
  }
}

export default function PatientLayout({
  children,
  params: { patientId },
}: {
  children: React.ReactNode;
  params: { patientId: string };
}) {
  return (
    <main className="h-screen overflow-auto">
      <div className="flex h-full flex-col bg-white ">
        <PatientHeaderBar patientId={patientId} />
        {children}
        <BottomPatientNavBar patientId={patientId} />
      </div>
    </main>
  );
}
