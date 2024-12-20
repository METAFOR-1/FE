import useAnalysisStore from "@/store";
import { cn } from "fast-jsx/util";
import { useMutation } from "react-query";
import Loading from "./molecule/Loading.molecule";
import Bubble from "./molecule/Bubble.molecule";
import serverApi from "@/connection/api/server";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PendingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();
  const { request, setResult } = useAnalysisStore();
  const container = {
    displays: "flex flex-col gap-y-5.5 items-center justify-center",
    sizes: "w-full min-h-screen",
  };

  const { mutate } = useMutation({
    retry: 1,
    mutationKey: ["postServer"],
    mutationFn: (request: string) => serverApi.post(request),
    onSuccess: (result) => {
      setResult(result);
      router("/result");
    },
  });
  useEffect(() => {
    if (!isLoading && request) {
      setIsLoading(true);
      return mutate(request);
    }
  }, [request]);
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
      <Bubble
        text={request}
        className="w-full flex justify-end"
        isQuote={true}
      />
    </div>
  );
}
