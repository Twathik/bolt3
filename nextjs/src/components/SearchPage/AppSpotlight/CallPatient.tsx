import { Badge } from "@/components/ui/badge";
import React from "react";

function CallPatient() {
  return (
    <Badge
      variant="default"
      className="bg-cyan-800 hover:bg-cyan-600"
      onClick={() => console.log("closed")}>
      Appeler
    </Badge>
  );
}

export default CallPatient;
