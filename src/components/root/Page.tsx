import React from "react";
import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const navigate = useNavigate(); 

  const handleStart = () => {
    navigate("/record"); 
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      {/* 메인 컨테이너 */}
      <div className="flex items-center justify-between w-full p-10 bg-white">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex flex-col justify-center gap-6 ml-20 mt-10">
          <h1 className="text-7xl font-bold leading-snug text-black">
            말만 하면 해결되는 <br /> 스트레칭 도우미
          </h1>
          <p className="text-gray-600 text-2xl font-bold mt-10">
            "사전학습모델을 활용한 음성 기반 건강 관리 솔루션"
          </p>
          <p className="text-gray-500 text-base leading-7">
            사전학습된 AI 모델을 활용해 어르신들이 음성으로 근골격계 증상을 설명하면, <br />
            이를 분석해 문제 근육을 파악하고 맞춤형 스트레칭 가이드를 제공합니다<br />
            의료 사각지대에서도 스스로 건강을 관리할 수 있는 도구로,<br />
            누구나 손숩게 사용할 수 있는 혁신적인 서비스입니다.        
          </p>
          <div className="text-center">
            <button 
              onClick={handleStart}
              className="bg-orange-500 text-xl text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition mt-10">
              시작하기
            </button>
          </div>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="flex-shrink-0 w-1/2 h-auto">
          <img
            src="src/asset/images/메이니.png" 
            alt="스트레칭 이미지"
            className="max-w-[1100px] fixed right-0 top-20"
          />
        </div>
      </div>

    </div>
  );
}

