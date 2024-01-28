import React, { PropsWithChildren } from "react";

export function DotBackgroundDemo({ children }: PropsWithChildren) {
  return (
    <div className="h-[50rem] w-full  bg-white   bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex    bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
