import { WorkListInterface } from "./WorklistInterface";
import { orthancAxios } from "./orthancAxios";

interface orthancFindToolInterface {
  CaseSensitive?: boolean;
  Expand: boolean;
  Full?: boolean;
  Labels?: string[];
  LabelsConstraint?: string;
  Level: "Patient" | "Study" | "Series" | "Instance";
  Limit?: number;
  Query: WorkListInterface;
  RequestedTags?: string[];
  Short?: boolean;
  Since?: number;
}

const linkExamToOrthancStudy = async ({
  workingListId,
}: {
  workingListId: string;
}): Promise<null | undefined | { linkId: string }> => {
  try {
    const findParams: orthancFindToolInterface = {
      Expand: true,
      Query: {
        AccessionNumber: workingListId,
      },
      Level: "Study",
    };
    const res = await orthancAxios.post("/tools/find", findParams);
    if (res.status !== 200) throw Error("bad orthanc response");
    if (res.data.length === 0) return null;
    return {
      linkId: res.data[0].ID,
    };
  } catch (error) {
    console.log({ error });
  }
};

export default linkExamToOrthancStudy;
