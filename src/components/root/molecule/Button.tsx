import Svg from "@/asset/Svg";
import { OnClick } from "fast-jsx/interface";
import { cn } from "fast-jsx/util";

export default function StartButton({
  onClick,
  className,
}: {
  onClick: OnClick;
  className?: string;
}) {
  const container = {
    displays: "flex justify-center items-center",
    sizes: "w-[367px] h-[367px]",
    boundaries: "rounded-full",
    borders: "border-2 border-orange-500",
    shadow: "shadow-md shadow-gray-500",
    styles: "cursor-pointer",
    className,
  };
  const body = {
    displays: "flex justify-center items-center",
    sizes: "w-[218px] h-[218px]",
    boundaries: "rounded-full",
    backgrounds: "bg-orange-500",
  };
  return (
    <button className={cn(container)} onClick={onClick}>
      <div className={cn(body)}>
        <Svg.Icon.Mic />
      </div>
    </button>
  );
}
