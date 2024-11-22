import { cn } from "fast-jsx/util";

export default function Bubble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const container = {
    className,
  };
  const body = {
    displays: "flex items-center justify-center",
    backgrounds: "bg-[#FFF5EB]",
    sizes: "w-[400px] h-12",
    boundaries: "rounded-xl",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>{text}</div>
    </div>
  );
}
