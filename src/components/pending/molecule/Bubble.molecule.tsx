import { LineBreaks } from "fast-jsx";
import { cn } from "fast-jsx/util";

export default function Bubble({
  text,
  className,
  isQuote,
}: {
  text?: string | string[];
  className?: string;
  isQuote?: boolean;
}) {
  const container = {
    positions: "relative",
    paddings: "p-6",
    sizes: "w-[750px]",
    backgrounds: "bg-[#FFF5EB]",
    rounds: "rounded-[20px]",
  };
  return (
    <div className={className}>
      <div className={cn(container)}>
        {isQuote && (
          <>
            <img
              src="/images/double-quotes.png"
              className="absolute right-8 bottom-3.5 w-6"
            />
            <img
              src="/images/double-quotes.png"
              className="absolute left-8 top-3.5 w-6 scale-x-[-1] scale-y-[-1]"
            />
          </>
        )}
        <LineBreaks
          texts={text ?? "로딩 중..."}
          className="text-[#9E9E9E] text-center text-[24px]"
        />
      </div>
    </div>
  );
}
