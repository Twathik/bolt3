"use client";
import React, { useEffect, useState } from "react";
import { classNames } from "@/lib/utils";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setProgress((previous) => (previous >= 100 ? 0 : previous + 10)),
      600,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 h-1 w-full bg-rose-800">
      <div
        className={classNames("h-full bg-rose-700 transition-all ease-in-out")}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
