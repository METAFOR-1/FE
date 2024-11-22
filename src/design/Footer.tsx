import { cn } from "fast-jsx/util";

const contents: string[] = ["채용", "이용약관", "개인정보처리방침", "제휴문의"];

export default function Footer() {
  const container = {
    positions: "fixed bottom-0 left-0",
    sizes: "h-[80px] w-full",
    displays: "flex items-center justify-between",
    backgrounds: "bg-orange-500",
    paddings: "px-20 py-3",
    colors: "text-white",
  };

  const leftText = {
    fontSizes: "text-lg font-bold",
    colors: "text-black",
  };

  const rightText = {
    fontSizes: "text-sm",
    aligns: "text-right",
    colors: "text-white opacity-80",
  };

  return (
    <div className={cn(container)}>
      {/* 왼쪽: AI TRIP 및 메뉴 */}
      <div className="flex items-center gap-x-10">
        <div className={cn(leftText)}>AI TRIP</div>
        <div className="flex items-center gap-x-10">
          {contents.map((content, index) => (
            <div key={index} className="font-bold">
              {content}
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽: 설명 텍스트 */}
      <div className={cn(rightText)}>
        <p>
          이 서비스는 의료 진단 또는 치료를 목적으로 하지 않으며, 건강 관리와
          증상 완화를 위한 참고 정보를 제공합니다
        </p>
      </div>
    </div>
  );
}
