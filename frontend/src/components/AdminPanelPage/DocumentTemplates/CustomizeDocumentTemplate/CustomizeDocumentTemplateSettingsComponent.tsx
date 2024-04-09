"use client";

import type { RawDocumentSettingsInterface } from "@/lib/utils/getDocumentSettings";
import React, { useEffect } from "react";
import PaddingSlider from "./PaddingSlider";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import UploadDocumentTemplateButton from "./UploadDocumentTemplateButton";

function CustomizeDocumentTemplateSettingsComponent({
  rawSettings,
  setSettings,
  size,
  settingsId,
}: {
  rawSettings: RawDocumentSettingsInterface;
  setSettings: React.Dispatch<
    React.SetStateAction<RawDocumentSettingsInterface>
  >;
  size: "A4" | "A5";
  settingsId: string;
}) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "DocumentTemplates/saveDocumentTemplateSettings",
    onError: () => {
      toast({
        title: "Erreur reseau!",
        description: "Les parametres n'ont pas pu etre modifiés",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    let req = true;
    const update = async () => {
      try {
        trigger({
          id: settingsId,
          documentTemplateConfiguration: JSON.stringify(rawSettings),
        });
      } catch (error) {}
    };
    if (req) update();
    return () => {
      req = false;
    };
  }, [rawSettings, settingsId, trigger]);
  return (
    <div>
      {size === "A4" && (
        <div>
          <div className="font-bold underline text-xl">
            Theme des pages impaires
          </div>
          <UploadDocumentTemplateButton
            setSettings={setSettings}
            settingsId={settingsId}
            face="evenUrl"
            title="Recto"
          />
          <div className="font-bold underline text-xl">
            Theme des pages paires
          </div>
          <UploadDocumentTemplateButton
            setSettings={setSettings}
            settingsId={settingsId}
            face="oddUrl"
            title="Verso"
          />
          <div className="font-bold underline text-xl">
            Configurer les marges du document
          </div>
        </div>
      )}
      {[]}
      <PaddingSlider
        paddingType="paddingTop"
        title="Marge du haut"
        rawSettings={rawSettings}
        setSettings={setSettings}
        size={size}
        settingsId={settingsId}
        disabled={isMutating}
      />
      <PaddingSlider
        paddingType="paddingBottom"
        title="Marge du Bas"
        rawSettings={rawSettings}
        setSettings={setSettings}
        size={size}
        settingsId={settingsId}
        disabled={isMutating}
      />
      <PaddingSlider
        paddingType="paddingLeft"
        title="Marge a gauche"
        rawSettings={rawSettings}
        setSettings={setSettings}
        size={size}
        settingsId={settingsId}
        disabled={isMutating}
      />
      <PaddingSlider
        paddingType="paddingRight"
        title="Marge a droite"
        rawSettings={rawSettings}
        setSettings={setSettings}
        size={size}
        settingsId={settingsId}
        disabled={isMutating}
      />
    </div>
  );
}

export default CustomizeDocumentTemplateSettingsComponent;
