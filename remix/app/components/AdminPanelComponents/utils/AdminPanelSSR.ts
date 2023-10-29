import { AppServerSideRequests } from "@/lib/ServerSideRequests";
import { getOnTrashFolders } from "./getOnTrashFolders";

export class AdminPanelSSR extends AppServerSideRequests {
  async getOnTrashFolders() {
    return await getOnTrashFolders({
      axiosInstance: this.axiosInstance,
    });
  }
}
