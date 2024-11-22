import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  RootPage,
  RootLayout,
  ChoicePage,
  ChoiceSurveyPage,
  RecordPage,
  PendingPage,
  ResultPage,
} from "./app/route.ts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
          <Route path="choice">
            <Route index element={<ChoicePage />} />
            <Route path="survey" element={<ChoiceSurveyPage />} />
          </Route>
          <Route path="pending" element={<PendingPage />} />
          <Route path="record" element={<RecordPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
