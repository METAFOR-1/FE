import { useState } from "react";
import { cn } from "fast-jsx/util";
import ButtonProvider from "./organism/ButtonProvider";

export default function RootPage() {
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <ButtonProvider />
    </div>
  );
}
