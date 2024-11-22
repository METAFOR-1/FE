import { create } from "zustand";
import { persist } from "zustand/middleware";
interface AnalysisStore {
  request?: string;
  setRequest: (request: string) => void;
}
const useAnalysisStore = create(
  persist<AnalysisStore>(
    (set) => ({
      request: undefined,
      setRequest: (request) => set({ request }),
    }),
    {
      name: "analysisStore",
    }
  )
);
export default useAnalysisStore;
