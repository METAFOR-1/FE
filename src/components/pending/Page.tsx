import useAnalysisStore from "@/store";
import { cn } from "fast-jsx/util";
import { useMutation } from "react-query";
import Loading from "./molecule/Loading.molecule";

export default function PendingPage() {
  const { request } = useAnalysisStore();
  const container = {
    displays: "flex items-center justify-center",
    sizes: "w-full min-h-screen",
  };
  const { mutate } = useMutation({
    mutationFn: async () => {},
  });
  return (
    <div className={cn(container)}>
      <Loading />
      <div>{request}</div>
    </div>
  );
}
