import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFileUpload } from "@/components/wg-generated/nextjs";
import type { RawDocumentSettingsInterface } from "@/lib/utils/getDocumentSettings";
import React, { useCallback, useEffect, useState } from "react";

function UploadDocumentTemplateButton({
  setSettings,
  settingsId,
  face,
  title,
}: {
  setSettings: React.Dispatch<
    React.SetStateAction<RawDocumentSettingsInterface>
  >;
  settingsId: string;
  face: "evenUrl" | "oddUrl";
  title: "Recto" | "Verso";
}) {
  const [files, setFiles] = useState<FileList>();

  const [data, setData] = useState<string[]>([]);

  const { upload, isMutating, error } = useFileUpload({});

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(e.target.files);
  }, []);

  const onSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    if (!files) {
      return;
    }
    try {
      const result = await upload({
        provider: "localMinio",
        profile: "documentTemplate",
        meta: { uuid: settingsId, face },
        files,
      });
      result && setData(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Upload failed!";
      alert(msg);
      console.error("Couldn't upload files", msg);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      const urls: any = {};
      urls[face] = `/app-storage/${data[0]}`;

      setSettings((raw) => ({ ...raw, urls: { ...raw.urls, ...urls } }));
      alert(
        "Le template va ètè changè, veuillez rafraichir la page pour constater les resultats"
      );
    }
  }, [data, face, setSettings]);

  useEffect(() => {
    if (error) alert("une erreur est survenue, veillez reessayer");
  }, [error]);

  return (
    <div className="flex flex-row w-full max-w-sm items-center gap-1.5 my-5">
      <Label htmlFor="picture">{title}</Label>
      <Input id="picture" type="file" onChange={onFileChange} />
      <Button disabled={isMutating} onClick={onSubmit}>
        {isMutating ? "..." : "Valider"}
      </Button>
    </div>
  );
}

export default UploadDocumentTemplateButton;
