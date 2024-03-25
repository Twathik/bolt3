import { Avatar } from "@/components/plate-ui/avatar";
import React from "react";
import patientImage from "../images/patient.jpeg";
import Image from "next/image";

function PatientAvatar() {
  return (
    <div>
      <Avatar className="w-64 h-64 mx-auto">
        <Image className="w-64 h-64" src={patientImage} alt="patient" />
      </Avatar>
    </div>
  );
}

export default PatientAvatar;
