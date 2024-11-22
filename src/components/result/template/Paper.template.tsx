import { cn } from "fast-jsx/util";
import Bubble from "../molecule/Bubble.molecule";
import { Result } from "@/connection/api/server";
import MuscleInformation from "./MuscleInformation.template";
import Youtube from "../molecule/Youtube.molecule";
import { forwardRef, Ref } from "react";
interface Props {
  result: Result;
}
function Paper({ props }: { props: Props }, ref: Ref<HTMLDivElement>) {
  const { result } = props;
  const container = {
    displays: "flex flex-col gap-y-7.5 items-center",
    sizes: "w-[210mm] h-[297mm]",
    test: "border-white border-2",
    boundaries: "px-7.5 py-6",
    backgrounds: "bg-white",
  };
  const match = result.youtubeLink.match(/youtu\.be\/([\w-]+)/);
  const videoId = match ? match[1] : null;
  return (
    <div ref={ref} className={cn(container)}>
      <div className="text-4xl font-bold">분석 결과</div>
      <Bubble
        text="이런 근육의 문제가 의심돼요."
        className="w-full flex justify-start"
      />
      <MuscleInformation
        description={result.reason}
        imageUrl={result.imageLink}
        muscleName={result.muscleName}
      />
      <Bubble
        text="이런 스트레칭을 추천드려요!"
        className="w-full flex justify-start"
      />
      {videoId && (
        <div>
          <div className="print:hidden">
            <Youtube id={videoId} width="560" height="360" />
          </div>
          <div className="relative hidden print:block">
            <img
              src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
              width={360}
            />
            <img
              src="/images/youtube.webp"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default forwardRef<
  HTMLDivElement,
  {
    props: Props;
  }
>(Paper);
