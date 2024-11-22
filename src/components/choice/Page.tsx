import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@/components/choice/molecule/Box.molecule";

export default function ChoicePage() {
  const navigate = useNavigate();

  const bodyParts = ["머리", "목", "어깨", "허리", "무릎", "발목"];

  const handlePartSelect = (part: string) => {
    // 선택된 부위를 쿼리 파라미터로 전달하며 survey 페이지로 이동
    navigate(`/choice/survey?part=${encodeURIComponent(part)}`);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">부위 선택</h1>
      <div className="flex flex-wrap justify-center mt-4">
        {bodyParts.map((part, index) => (
          <Box key={index} text={part} onClick={() => handlePartSelect(part)} />
        ))}
      </div>
    </div>
  );
}

