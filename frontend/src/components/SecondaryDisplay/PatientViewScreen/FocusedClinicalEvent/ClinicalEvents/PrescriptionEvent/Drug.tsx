import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/plate-ui/avatar";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import React from "react";
import DrugDetailsComponent from "./DrugDetailsComponent";

function Drug({ drug }: { drug: DrugHitInterface }) {
  return (
    <div className="flex justify-between p-2">
      <div className=" w-full shadow-lg rounded-md border-slate-500 border-[1px]">
        <div className="grid grid-cols-9">
          <div className="col-span-6 m-3 flex gap-4 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={`http://pharmnet-dz.com/${drug.miniatureImageLink}`}
                />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="text-slate-800">{drug.drugTemplate}</div>
              <div className="text-slate-400 text-sm">{drug.DCI}</div>
            </div>
          </div>
          <div className="col-span-3 flex flex-row justify-end items-center px-4">
            <DrugDetailsComponent drug={drug} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drug;
