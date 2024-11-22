import { cn } from "fast-jsx/util";
import ControllerTemplate from "./template/Controller.template";

export default function RootPage() {
  const container = {
    displays: "flex justify-center",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <ControllerTemplate />
    </div>
  );
}
