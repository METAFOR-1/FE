import React from "react";
import { cn } from "fast-jsx/util";
import { OnClick } from "fast-jsx/interface";

interface BoxProps {
  text: string; // 박스 안에 표시될 텍스트
  onClick?: OnClick; // 클릭 이벤트 핸들러
}

export default function Box({ text, onClick }: BoxProps) {
  const container = {
    boundaries: "border-2 border-gray-300 p-4 m-2 rounded cursor-pointer hover:border-blue-500",
  };

  return (
    <div className={cn(container)} onClick={onClick}>
      {text}
    </div>
  );
}
