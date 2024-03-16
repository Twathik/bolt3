"use client";
import { useEffect, useState } from "react";
import EditPatientInformation from "./EditPatienInfoForm/EditPatientInformation";
import bolt_logo from "@/components/GeneralComponents/images/logo_bolt.png";
import MoveToTrash from "./PatientMenu/MoveToTrash";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import Image from "next/image";
import { PatientFolderNavigationMenu } from "./Header/AppMenu/PatientFolderNavigationMenu";
import PatientInformation from "./PatientMenu/PatientInformation";
import Link from "next/link";
import { useBoltStore } from "@/stores/boltStore";

export default function PatientFolderHeader({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  const [open, setOpen] = useState(false);

  const setPatient = useBoltStore((s) => s.setPatient);
  useEffect(() => {
    setPatient(patient);
  }, [patient, setPatient]);

  return (
    <header className="max-w-full bg-slate-800">
      <nav
        className="mx-auto flex flex-grow items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global">
        <div className="flex items-center">
          <Link href="/search">
            <div className="flex item-center">
              <Image className="h-8 w-auto" src={bolt_logo} alt="" />
              <span className="mx-8 text-amber-400">BOLT 3</span>
            </div>
          </Link>

          <PatientInformation />
        </div>

        <div className="hidden flex-row items-center justify-center lg:flex lg:gap-x-12">
          <PatientFolderNavigationMenu patient={patient} />
        </div>
        <div className=" hidden items-center justify-center gap-x-6 lg:block">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="default" className="text-white">
                <span className="strong">Géstion du dossier</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Paramètres</DropdownMenuLabel>
              <DropdownMenuGroup className="flex flex-col">
                <EditPatientInformation />
                <MoveToTrash patient={patient} />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
