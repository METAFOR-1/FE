import { cn } from "fast-jsx/util";
import Paper from "./template/Paper.template";
import { Button } from "fast-jsx";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import useAnalysisStore from "@/store";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const router = useNavigate();
  const { result } = useAnalysisStore();
  const ref = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  const container = {
    displays: "flex flex-col gap-y-7.5 items-center justify-center",
    sizes: "w-full min-h-screen",
    paddings: "p-24",
    backgrounds: "bg-gray-light",
  };
  if (!result) return <div>?</div>;
  return (
    <div className={cn(container)}>
      <Paper ref={ref} props={{ result }} />
      <div className="w-120 flex flex-col items-center justify-center py-4 bg-[#FFC88C] text-[#646262] rounded-xl">
        <div>
          결과지를 출력해두면 병의원 또는 방문 진료 시에 도움이 될 수 있어요.
        </div>
        <div>결과지를 출력할까요?</div>
      </div>
      <div className="flex gap-x-3.5">
        <Button
          title="네, 출력할래요"
          onClick={() => handlePrint()}
          option={{
            width: "w-40",
            height: "h-14",
            background: "bg-[#FD8300] hover:bg-white",
            textColor: "text-white hover:text-[#FD8300]",
            boundary: "border-2 border-[#FD8300] duration-500 rounded-md",
            font: "text-lg",
          }}
        />
        <Button
          title="홈으로 돌아가기"
          onClick={() => router("/")}
          option={{
            width: "w-40",
            height: "h-14",
            background: "bg-white hover:bg-[#FD8300]",
            textColor: "text-[#FD8300] hover:text-white",
            boundary: "border-2 border-[#FD8300] duration-500 rounded-md",
            font: "text-lg",
          }}
        />
      </div>
    </div>
  );
}
