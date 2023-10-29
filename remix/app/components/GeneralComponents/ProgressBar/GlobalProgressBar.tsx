import { classNames } from "@/lib/utils";
import React from "react";
import { useNavigation } from "@remix-run/react";

function GlobalProgressBar() {
  const navigation = useNavigation();
  const active = navigation.state !== "idle";
  const ref = React.useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = React.useState(true);

  React.useEffect(() => {
    if (!ref.current) return;
    if (active) setAnimationComplete(false);

    Promise.allSettled(
      ref.current.getAnimations().map(({ finished }) => finished)
    ).then(() => !active && setAnimationComplete(true));
  }, [active]);
  return (
    <div
      role="progressbar"
      aria-hidden={!active}
      aria-valuetext={active ? "Loading" : undefined}
      className="fixed inset-x-0 top-0 z-50 h-1.5 animate-pulse">
      <div
        className={classNames(
          "h-full bg-gradient-to-r from-slate-300 to-slate-900 transition-all duration-1000 ease-in-out",
          navigation.state === "idle" ? "w-0 opacity-0 transition-none" : "",
          navigation.state === "submitting" ? "w-1/2" : "",
          navigation.state === "loading" ? "w-full" : "",
          navigation.state === "idle" && !animationComplete ? "w-full" : ""
        )}
      />
    </div>
  );
}

export default GlobalProgressBar;
