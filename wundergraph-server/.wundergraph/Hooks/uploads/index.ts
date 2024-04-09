import { HooksConfig } from "../../generated/wundergraph.hooks";
import avatar from "./avatarUpload";
import documentTemplate from "./documentTemplate";

const uploads: HooksConfig["uploads"] = {
  localMinio: {
    avatar,
    documentTemplate,
  },
};

export default uploads;
