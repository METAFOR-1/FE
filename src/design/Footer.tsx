import { cn } from "fast-jsx/util";

const contents: string[] = ["채용", "이용약관", "개인정보처리방침", "제휴문의"];

export default function Footer() {
  const container = {
    positions: "fixed bottom-0 left-0",
    sizes: "h-[119px] w-full",
    displays: "flex items-center gap-x-5",
    backgrounds: "bg-orange-500",
    paddings: "pl-20",
  };
  return (
    <div className={cn(container)}>
      <div>AI TRIP</div>
      <div className="flex items-center gap-x-5 text-white font-bold">
        {contents.map((content) => (
          <div>{content}</div>
        ))}
      </div>
    </div>
  );
}
