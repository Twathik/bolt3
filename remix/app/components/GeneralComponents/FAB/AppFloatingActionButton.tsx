import { useCallback } from "react";
import { Cog6ToothIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useHotkeys } from "@mantine/hooks";
import { HotKeysMapping } from "../HotKeys/HotKeysMapping";
import { useMutation } from "@/lib/wundergraph";

function AppFloatingActionButton() {
  const { trigger } = useMutation({
    operationName: "global/closeAllTabsMutation",
  });

  const closeAllTabs = useCallback(async () => {
    await trigger({ message: new Date().toISOString() });
  }, [trigger]);
  useHotkeys([
    [HotKeysMapping.closeAllWindows, async () => await closeAllTabs()],
  ]);

  return (
    <div className="group fixed bottom-0 right-0 flex  h-24 w-24 items-end justify-end p-2 ">
      <div className="absolute z-50 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white shadow-xl  ">
        <Cog6ToothIcon className="w-8" />
      </div>

      <div className="absolute flex scale-100 scale-y-0 rounded-full bg-green-300 p-2 text-white   transition-all  duration-200 ease-out hover:bg-green-400 hover:p-3 group-hover:-translate-x-16 group-hover:scale-y-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
          />
        </svg>
      </div>

      <div className="absolute flex scale-x-0 rounded-full bg-rose-700 p-2 text-white transition-all  duration-200  ease-out hover:bg-rose-800 hover:p-3 group-hover:-translate-y-16  group-hover:scale-x-100">
        <XCircleIcon className="w-6" onClick={closeAllTabs} />
      </div>

      <div className="absolute flex scale-x-0 rounded-full bg-yellow-300 p-2 text-white transition-all duration-200   ease-out  hover:bg-yellow-400 hover:p-3 group-hover:-translate-x-14 group-hover:-translate-y-14 group-hover:scale-x-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </div>
    </div>
  );
}

export default AppFloatingActionButton;
