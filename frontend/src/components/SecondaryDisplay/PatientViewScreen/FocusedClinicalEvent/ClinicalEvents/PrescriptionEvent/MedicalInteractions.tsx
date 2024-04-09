import Image from "next/image";
import React from "react";
import coomingSoon from "@/lib/images/cooming-soon.jpeg";

function MedicalInteractions() {
  return (
    <div className="border-[1px] rounded-xl shadow-xl h-full py-5">
      <div className="text-xl font-bold underline text-center">
        Interactions médicamenteuses
      </div>
      <div className="m-10">
        <Image src={coomingSoon} alt="cooming soon" />
      </div>
    </div>
  );
}

export default MedicalInteractions;
