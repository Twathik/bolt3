"use client";
/* eslint-disable react/no-unescaped-entities */

import ReadOnlyPlateEditor from "@/components/plateEditor/ReadOnlyPlateEditor";

function CopyFolderComponent({ patientId }: { patientId: string }) {
  return <ReadOnlyPlateEditor documentName={`${patientId}-folder`} />;
}

export default CopyFolderComponent;
