import { cn } from "fast-jsx/util";
import ButtonProvider from "../organism/ButtonProvider";
import { Button } from "fast-jsx";

export default function ControllerTemplate() {
  const container = {
    positions: "relative",
    displays: "flex flex-col items-center",
    sizes: "w-full",
    boundaries: "border-2 border-green-dark",
  };
  return (
    <div className={cn(container)}>
      <img
        src="/images/sound.png"
        className="absolute top-[180px] z-0 ml-4.5"
      />
      <ButtonProvider className="mt-[80px] z-10 " />
      <div className="flex flex-col items-center gap-y-7.5 mt-14">
        <div className="text-[48px] font-bold">
          마이크에 대고 증상을 말해주세요.
        </div>
        <div className="text-[30px] text-[#646262]">또는</div>
        <Button
          title="지금은 말하기 어려워요"
          onClick={() => {}}
          option={{
            background: "bg-[#FD8300]/50 hover:bg-[#FD8300]",
            width: "w-[698px]",
            height: "h-[106px]",
            font: "text-[36px]",
            textColor: "text-[#646262]/50 hover:text-[#646262] ",
            boundary: "rounded-2xl",
          }}
        />
      </div>
    </div>
  );
}
