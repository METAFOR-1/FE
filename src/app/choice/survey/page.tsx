import { cn } from "fast-jsx/util";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const surveyQuestions = {
  머리: [
    "어지럽다",
    "이명 또는 귀에서 소리가 들린다", 
    "머리가 자주 아프다", 
    "현기증이 있다"
  ],
  목: [
    "목이 뻣뻣하다", 
    "목이 자주 아프다", 
    "어깨로 통증이 퍼진다"
  ],
  어깨: [
    "어깨가 결린다", 
    "어깨 통증으로 팔을 들기 어렵다"
  ],
  허리: [
    "허리가 뻣뻣하다", 
    "허리가 자주 아프다"
  ],
  무릎: [
    "무릎이 아프다", 
    "계단을 오르거나 내릴 때 통증이 있다"
  ],
  발목: [
    "발목을 자주 삔다", 
    "발목이 불안정하다"
  ],
};

export default function SurveyPage() {
  const [q,setQ]=useState<Record<number, boolean>>({});
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const regionId = query.get("part");

  const questions = surveyQuestions[regionId as keyof typeof surveyQuestions] || [];
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleCheckboxChange = (question: string) => {
    setSelectedAnswers((prev) =>
      prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]
    );
  };

  const handleSubmit = () => {
    navigate("/choice/result", {
      state: { region: regionId, answers: selectedAnswers },
    });
  };

  if (!questions.length) {
    return (
      <div className="survey-page">
        <h1 className="text-center text-2xl font-bold">설문 조사</h1>
        <p className="text-center">잘못된 부위가 선택되었습니다. 다시 시도해주세요.</p>
      </div>
    );
  }
  const buttonStyle={
    sizes:'w-24 h-24'
  }

  useEffect(()=>{
    console.log(q)
  }, [q])
  return (
    <div className="survey-page">
      <h1 className="text-center text-2xl font-bold">{regionId} 설문 조사</h1>
      <div className="mt-4 space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{question}</span>
            <button 
            onClick={()=> {
              if(!q[index]) return setQ((prev)=>({...prev, }));
              return setQ((prev)=>({
...prev, index: !q[index]
              }))
            }}
            className={cn(buttonStyle, q[index]?'border-2':'border-2 border-red-500')}>

            </button>
          </div>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        제출하기
      </button>
    </div>
  );
}
