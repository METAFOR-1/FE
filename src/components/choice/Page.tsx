import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChoicePage() {
  const navigate = useNavigate();

  const bodyParts = ["머리", "목", "어깨", "가슴", "등", "팔", "허리", "골반", "다리", "발목"];

  const handlePartSelect = (part: string) => {
    navigate(`/choice/survey?part=${encodeURIComponent(part)}`);
  };

  return (
    <div className="flex flex-col items-center p-10 min-h-[82vh]">
  {/* 상단 사각형 스타일 */}
  <div className="bg-[#FFF4E6] p-8 h-32 rounded-2xl mb-10 shadow-md flex items-center justify-center w-[80%] max-w-[600px]">
    <p className="text-black text-3xl">불편하신 곳을 알려주세요.</p>
  </div>

  {/* 선택 가능한 부위들 */}
  <div className="grid grid-cols-5 items-center gap-y-10 gap-x-17">
    {bodyParts.map((part, index) => (
      <button
        key={index}
        onClick={() => handlePartSelect(part)}
        className="w-40 h-40 text-4xl bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-[#FFF4E6] hover:shadow-lg transition"
      >
        {part}
      </button>
    ))}
  </div>
</div>

  );
}

