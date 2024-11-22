import { LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";

export default function Bubble({
  text,
  className,
}: {
  text?: string | string[];
  className?: string;
}) {
  const container = {
    paddings: "p-3.5",
    sizes: "min-w-[750px]",
    backgrounds: "bg-[#FFF5EB]",
    rounds: "rounded-[20px]",
  };
  return (
    <div className={className}>
      <div className={cn(container)}>
        <LineBreaks
          texts={text ?? "로딩 중..."}
          className="text-[#9E9E9E] text-center text-[32px]"
        />
      </div>
    </div>
  );
}
