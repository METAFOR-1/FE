import { cn } from "fast-jsx/util";
import ButtonProvider from "../organism/ButtonProvider";
import { Button } from "fast-jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ControllerTemplate() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const router = useNavigate();
  const container = {
    positions: "relative",
    displays: "flex flex-col items-center",
    sizes: "w-full",
  };
  return (
    <div className={cn(container)}>
      <img
        src="/images/sound.png"
        className="absolute top-[180px] z-0 ml-4.5"
      />
      <ButtonProvider
        isRecordingState={[isRecording, setIsRecording]}
        className="mt-[80px] z-10 "
      />
      <div className="flex flex-col items-center gap-y-7.5 mt-14">
        <div className="text-[48px] font-bold">
          마이크에 대고 증상을 말해주세요.
        </div>
        <div className="text-[30px] text-[#646262]">또는</div>
        {!isRecording ? (
          <Button
            title="지금은 말하기 어려워요"
            onClick={() => router("/choice")}
            option={{
              background: "bg-[#FD8300]/50 hover:bg-[#FD8300]",
              width: "w-[698px]",
              height: "h-[106px]",
              font: "text-[36px]",
              textColor: "text-[#646262]/50 hover:text-white duration-500 ",
              boundary: "rounded-2xl",
            }}
          />
        ) : (
          <div className="text-2xl">말을 마치면 버튼을 다시 눌러주세요.</div>
        )}
      </div>
    </div>
  );
}
