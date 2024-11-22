import { cn } from "fast-jsx/util";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Survey {
  id: number;
  description: string;
}

const surveys: Record<string, Survey[]> = {
  머리: [
    { id: 1, description: "어지럽다" },
    { id: 2, description: "이명 또는 귀에서 소리가 들린다" },
    { id: 3, description: "눈이 침침하다" },
    { id: 4, description: "눈꺼풀이 처진다" },
    { id: 5, description: "눈물이 난다" },
    { id: 6, description: "콧물이 난다" },
    { id: 7, description: "눈의 흰동자가 붉어진다" },
    { id: 8, description: "코가 막힌다" },
    { id: 9, description: "입이 잘 벌어지지 않는다" },
    { id: 10, description: "악관절이 아프다" },
    { id: 11, description: "고개를 돌리면 삼킬 때 통증이 심해지므로 고래를 돌리기 싫다" },
    { id: 12, description: "이를 간다" },
    { id: 13, description: "시력이 나빠졌다" },
    { id: 14, description: "목 속에 무엇이 걸린다" },
    { id: 13, description: "입으로 숨을 쉰다" },
    { id: 14, description: "턱이 앞으로 나왔다" },
    { id: 15, description: "턱 밑에 무엇인가 붙어있는 느낌이다" },
    { id: 16, description: "침이나 음식을 삼키기가 불편하다" },
    { id: 17, description: "혀가 아프다" },
    { id: 18, description: "글자에 집중하기 어렵다" },
    { id: 19, description: "통증이 코에서 앞이마까지 나타난다" },
    { id: 20, description: "음식을 씹으면 광대뼈 아래의 통증이 심해진다" },
    { id: 21, description: "뒷머리가 아파서 베게를 벨 수 없다" },
    { id: 22, description: "" },
    { id: 23, description: "" },
    { id: 24, description: "" },
    { id: 25, description: "" },
    { id: 26, description: "" },
    { id: 27, description: "" },
    { id: 28, description: "" },
    
  ],
  목: [
    { id: 1, description: "옆머리가 아프다" },
    { id: 2, description: "어깨에 걸친 무거운 옷을 견디기 어렵다" },
    { id: 3, description: "목이 아프고 뻣뻣하다" },
    { id: 4, description: "머리를 한쪽으로 끝까지 돌리면 반대쪽에 통증이 나타난다" },
    { id: 5, description: "양쪽 날개뼈 사이가 뜨겁게 아프다" },
    { id: 6, description: "통증이 있는 쪽으로 고개가 기운다" },
    { id: 7, description: "단단한 바닥에 베게 없이 누울 때 어지럽다" },
    { id: 8, description: "어지러워서 균형을 잃었다" },
    { id: 9, description: "구역질이 난다" },
    { id: 10, description: "멀미한다" },
    { id: 11, description: "위가 아프다" },
    { id: 12, description: "이마에 땀이 난다" },
    { id: 13, description: "무게에 대한 감각이 둔하다" },
    { id: 14, description: "실신한다" },
    { id: 15, description: "귀가 잘 들리지 않는다" },
    { id: 16, description: "볼과 턱 주변에 따끔따끔하게 찌르는 통증이 있다" },
    { id: 17, description: "눈이 침침하다" },
    { id: 18, description: "눈이 아프다" },
    { id: 19, description: "뒷머리가 아파서 베게를 벨 수 없다" },
    { id: 20, description: "숨이 찬다" },
    { id: 21, description: "잠을 설친다" },
    { id: 22, description: "손에 들고 있던 물건을 놓친다" },
    { id: 23, description: "손이 저린다" },
    { id: 24, description: "소파에 앉아서 잔다" },
    { id: 25, description: "손가락 마디가 뻣뻣하다" },
    { id: 26, description: "손과 손등이 붓는다" },
    { id: 27, description: "엄지 손가락 감각이 무디다" },
  ],
  어깨: [
    { id: 1, description: "쉬고 있는 동안에 어깨 옆이 아프다" },
    { id: 2, description: "팔을 옆으로 들어올릴 때 아프다" },
    { id: 3, description: "어깨 관절에서 소리가 난다" },
    { id: 4, description: "어깨가 뻣뻣하다" },
    { id: 5, description: "쉬고 있는 동안에 어깨 옆이 아프다" },
    { id: 6, description: "팔을 들어올릴 때 어깨의 운동이 제한된다(머리 빗기, 양치질)" },
    { id: 7, description: "바지의 뒤 주머니에 손을 넣지 못한다" },
    { id: 8, description: "아픈 부분에서 땀이 난다" },
    { id: 9, description: "아픈 쪽으로 눕기 어렵다" },
    { id: 10, description: "어깨를 안쪽으로 웅크리기 힘들다" },
    { id: 11, description: "주먹 쥔 힘이 약하다" },
    { id: 12, description: "어깨를 움직일 때 약지와 새끼 손가락이 저리다" },
    { id: 13, description: "쉴 때나 활동할 때 어깨 뒷부분 모두 아프다" },
  ],
  가슴: [
    { id: 1, description: "팔이 저리다" },
    { id: 2, description: "팔을 들어올리기 힘들다" },
    { id: 3, description: "큰 물건을 머리위의 선반에 올려놓으려 할 때 아프다" },
    { id: 4, description: "어깨뼈 주변에서 소리가 난다" },
    { id: 5, description: "아픈 쪽으로 눕거나 등이 굽었을 때 통증이 심해진다" },
  ],
  팔: [
    { id: 1, description: "손을 등 뒤로 돌려서 반대 쪽 팔을 잡을 수 없다" },
    { id: 2, description: "팔을 어깨 높이 이상 들어올리면 아프다" },
    { id: 3, description: "엄지손가락이 저리다" },
    { id: 4, description: "골프나 테니스를 하면서 팔꿈치를 힘차게 펼 때 아프다" },
    { id: 5, description: "주먹 쥐는 힘이 약하다(테니스 라켓을 놓친다, 주스병에서 주스를 따르기 어렵다)" },
    { id: 6, description: "손목을 힘주어 비틀면 통증이 심해진다(문고리 돌릴 때, 나사못을 돌려 박을 때)" },
    { id: 7, description: "손을 꽉 쥐면 아프다(악수할 때)" },
    { id: 8, description: "손목을 힘주어 비틀면 통증이 심해진다(문고리 돌릴 때, 나사못을 돌려 박을 때)" },
    { id: 9, description: "손을 꽉 쥐면 팔꿈치가 아프다(악수할 때)" },
    { id: 10, description: "자다가 깬다" },
    { id: 11, description: "손가락 마디가 뻣뻣하면서 아프다" },
    { id: 12, description: "테니스를 치거나 무거운 물건을 들면 아프다" },
    { id: 13, description: "손바닥에 딱딱하게 굳은 구축이 있다" },
    { id: 14, description: "나사못 드라이버 같은 공구를 손바닥으로 잡기 어렵다" },
    { id: 15, description: "손바닥을 바늘로 콕콕 찌르는 느낌이 있다." },
    { id: 16, description: "두꺼운 천을 자르거나 정원일을 할 때 가위를 사용하기 어렵다" },
    { id: 17, description: "머리 뒤에 머리 핀을 꽂는 것을 못한다" },
    { id: 18, description: "컵을 쥔 손을 밖으로 돌리기 어렵다" },
    { id: 19, description: "엄지 손가락의 움직임이 둔하다" },
    { id: 20, description: "단추 채우기, 바느질 등이 어렵다" },
    { id: 21, description: "손가락 마디에 혹이 생겼다" },
  ],
  허리: [
    { id: 1, description: "허리가 뻣뻣하다" },
    { id: 2, description: "허리가 자주 아프다" },
  ],
  무릎: [
    { id: 1, description: "무릎이 아프다" },
    { id: 2, description: "계단을 오르내릴 때 통증이 있다" },
  ],
  발목: [
    { id: 1, description: "발목이 자주 삔다" },
    { id: 2, description: "발목이 불안정하다" },
  ],
};

interface SurveyRender extends Survey {
  isChecked: boolean;
}

export default function SurveyPage() {
  const [selects, setSelects] = useState<SurveyRender[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const regionId = query.get("part") || "머리";

  // 현재 선택된 부위의 질문 가져오기
  const currentSurveys = surveys[regionId] || [];

  const handleSubmit = () => {
    navigate("/choice/result", {
      state: { region: regionId, answers: selects },
    });
  };

  const buttonStyle = {
    sizes: "w-12 h-12",
  };

  useEffect(() => {
    console.log("선택된 설문 항목:", selects);
  }, [selects]);

  return (
    <div className="survey-page">
      <h1 className="text-center text-2xl font-bold">{regionId} 설문 조사</h1>
      <div className="mt-4 space-y-4">
        {currentSurveys.map(({ description, id }) => (
          <div key={id} className="flex items-center justify-between">
            <span>{description}</span>
            <button
              onClick={() =>
                setSelects((prev) => [
                  ...prev.filter((select) => select.id !== id),
                  {
                    id,
                    description,
                    isChecked: !prev.find((select) => select.id === id)
                      ?.isChecked,
                  },
                ])
              }
              className={cn(
                buttonStyle,
                selects.find((select) => select.id === id)?.isChecked
                  ? "border-2 border-green-dark"
                  : "border-2 border-red-500"
              )}
            ></button>
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
