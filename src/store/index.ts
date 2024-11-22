import { Result } from "@/connection/api/server";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface AnalysisStore {
  request?: string;
  setRequest: (request: string) => void;
  result?: Result;
  setResult: (result: Result) => void;
}
const useAnalysisStore = create(
  persist<AnalysisStore>(
    (set) => ({
      request: undefined,
      setRequest: (request) => set({ request }),
      result: undefined,
      setResult: (result) => set({ result }),
    }),
    {
      name: "analysisStore",
    }
  )
);
export default useAnalysisStore;
