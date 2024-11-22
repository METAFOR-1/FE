import { cn } from "fast-jsx/util";

export default function ResultPage() {
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <div>result</div>
    </div>
  );
}
