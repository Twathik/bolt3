"use server";
import createWgClient from "@/lib/createClient";
import type { DocumentTemplatesGetDocumentTemplatesResponseData } from "../wg-generated/models";

const getDocumentTemplates = async (): Promise<
  | {
      documents:
        | DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_documentTemplates"];
      settings:
        | DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_settings"];
      settingsId: string;
    }
  | undefined
> => {
  try {
    const client = await createWgClient();
    const getDocumentTemplates = await client.query({
      operationName: "DocumentTemplates/getDocumentTemplates",
    });
    if (getDocumentTemplates.error) throw getDocumentTemplates.error;
    if (!getDocumentTemplates.data) throw Error();
    return {
      documents: getDocumentTemplates.data.mainDb_documentTemplates,
      settings: getDocumentTemplates.data.mainDb_settings,
      settingsId: getDocumentTemplates.data.mainDb_settings[0].id,
    };
  } catch (error) {
    console.log({ error });
  }
};

export default getDocumentTemplates;
