"use client";

import bolt_logo from "@/components/GeneralComponents/images/logo_bolt.png";

import Image from "next/image";
import Link from "next/link";
import FocusedPatientInformation from "./FocusedPatientInformation";

export default function PatientFolderHeader() {
 
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
          <FocusedPatientInformation />
        </div>
      </nav>
    </header>
  );
}
