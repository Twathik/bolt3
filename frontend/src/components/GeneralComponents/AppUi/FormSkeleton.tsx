import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function FormSkeleton() {
  return (
    <div className="m-20 flex h-full w-full flex-col items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[250px]" />
      </div>
    </div>
  );
}

export default FormSkeleton;
