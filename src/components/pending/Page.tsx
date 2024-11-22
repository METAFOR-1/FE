import useAnalysisStore from "@/store";
import { cn } from "fast-jsx/util";
import { useMutation } from "react-query";
import Loading from "./molecule/Loading.molecule";
import Bubble from "./molecule/Bubble.molecule";

export default function PendingPage() {
  const { request } = useAnalysisStore();
  const container = {
    displays: "flex flex-col gap-y-5.5 items-center justify-center",
    sizes: "w-full min-h-screen",
  };
  const { mutate } = useMutation({
    mutationFn: async () => {},
  });
  return (
    <div className={cn(container)}>
      <Loading />
      <Bubble
        text={[
          "해당 증상의 원인이 되는 근육을 알아내고 있어요!",
          "잠시만 기다려주세요.",
        ]}
        className="w-full flex justify-start"
      />
      <Bubble text={request} className="w-full flex justify-end" />
    </div>
  );
}
