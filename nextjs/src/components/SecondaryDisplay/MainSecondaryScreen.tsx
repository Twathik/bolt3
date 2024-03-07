"use client";
import React from "react";
import { SparklesCore } from "../GeneralComponents/AceternityUi/Sparkles";
import { CgScreenMirror } from "react-icons/cg";

export default function MainSecondaryScreen() {
  return (
    <div className=" w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-9xl text-3xl lg:text-9xl font-bold text-center relative z-20 text-amber-400">
        <CgScreenMirror />
      </h1>
      <h5 className="md:text-2xl text-xl lg:text-3xl font-bold text-center relative z-20 text-amber-400">
        BOLT 3
      </h5>
      <div className="w-[80rem] h-60 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={2000}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={4}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
