import { Skeleton } from "@/ui/components/ui/skeleton";
import React from "react";

function BoltSearchSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center space-x-4 p-10">
      <div className="space-y-4 mx-auto">
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
        <Skeleton className="h-10 w-[550px]" />
      </div>
    </div>
  );
}

export default BoltSearchSkeleton;
