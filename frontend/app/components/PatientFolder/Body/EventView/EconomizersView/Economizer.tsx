import type { EconomizersEconomizersResponseData } from "@/components/generated/models";
import DeleteEconomizerButton from "./EconomizersButtons/DeleteEconomizerButton";
import UpdateEconomizerButton from "./EconomizersButtons/UpdateEconomizerButton";
import InsertEconomizerButton from "./EconomizersButtons/InsertEconomizerButton";

function Economizer({
  economizer,
}: {
  economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0];
}) {
  return (
    <div className="flex justify-between gap-x-6 m-2">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className=" flex flex-col justify-center items-start text-sm font-semibold leading-6 text-gray-900">
            {economizer.name}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <div className="flex flex-row items-end gap-4">
          <DeleteEconomizerButton economizer={economizer} />
          <UpdateEconomizerButton economizer={economizer} />
          <InsertEconomizerButton economizer={economizer} />
        </div>
      </div>
    </div>
  );
}

export default Economizer;
