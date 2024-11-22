import { cn } from "fast-jsx/util";

export default function Loading() {
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-[367px] h-[367px] ",
    styles: "rounded-full border-2 border-[#FD8300] shadow-md shadow-gray-300",
  };
  return (
    <div className={cn(container)}>
      <img src="/images/loading.png" className="animate-spin duration-2000" />
    </div>
  );
}
