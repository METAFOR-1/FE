import useAnalysisStore from "@/store";
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
    {
      id: 11,
      description: "고개를 돌리면 삼킬 때 통증이 심해지므로 고래를 돌리기 싫다",
    },
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
  ],
  목: [
    { id: 1, description: "옆머리가 아프다" },
    { id: 2, description: "어깨에 걸친 무거운 옷을 견디기 어렵다" },
    { id: 3, description: "목이 아프고 뻣뻣하다" },
    {
      id: 4,
      description: "머리를 한쪽으로 끝까지 돌리면 반대쪽에 통증이 나타난다",
    },
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
    {
      id: 6,
      description: "팔을 들어올릴 때 어깨의 운동이 제한된다(머리 빗기, 양치질)",
    },
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
    {
      id: 6,
      description:
        "팔을 앞으로 들었던 팔을 옆으로 벌릴 때 어깨의 운동 범위가 제한된다.",
    },
    { id: 7, description: "잠을 설친다" },
    { id: 8, description: "가슴이 조이고 아프다" },
    { id: 9, description: "심장박동이 불규칙하다" },
    { id: 10, description: "손을 앞으로 뻗어 어깨 높이로 올리기 어렵다" },
    { id: 11, description: "마른 기침을 한다" },
    { id: 12, description: "심호흡, 기침, 재채기를 하면 통증이 심해진다" },
    { id: 13, description: "심장박동이 불규칙하다" },
    { id: 14, description: "숨쉬기 어렵다" },
    { id: 15, description: "딸꾹질을 한다" },
  ],
  등: [
    { id: 1, description: "발과 다리가 화끈거린다" },
    { id: 2, description: "종아리에 쥐가 난다" },
    { id: 3, description: "누운 자세나 의자에서 일어나기 어렵다" },
    { id: 4, description: "고관절 부위가 무겁게 느껴진다" },
    { id: 5, description: "고환이나 사타구니가 아프다" },
    { id: 6, description: "앞으로 구부리기나 몸통 돌리기가 어렵다" },
    { id: 7, description: "기침이나 재채기를 하면 통증이 심해진다" },
    { id: 8, description: "자고 일어나면 기어서 화장실에 간다." },
    { id: 9, description: "바로 누운자세에서 돌아 누우려면 아파서 힘들다" },
    {
      id: 10,
      description:
        "앉거나 서서 기대지 않고 몸을 바로 해서 체중 부하가 되면 통증이 극심하게 나타난다",
    },
  ],
  팔: [
    { id: 1, description: "손을 등 뒤로 돌려서 반대 쪽 팔을 잡을 수 없다" },
    { id: 2, description: "팔을 어깨 높이 이상 들어올리면 아프다" },
    { id: 3, description: "엄지손가락이 저리다" },
    {
      id: 4,
      description: "골프나 테니스를 하면서 팔꿈치를 힘차게 펼 때 아프다",
    },
    {
      id: 5,
      description:
        "주먹 쥐는 힘이 약하다(테니스 라켓을 놓친다, 주스병에서 주스를 따르기 어렵다)",
    },
    {
      id: 6,
      description:
        "손목을 힘주어 비틀면 통증이 심해진다(문고리 돌릴 때, 나사못을 돌려 박을 때)",
    },
    { id: 7, description: "손을 꽉 쥐면 아프다(악수할 때)" },
    {
      id: 8,
      description:
        "손목을 힘주어 비틀면 통증이 심해진다(문고리 돌릴 때, 나사못을 돌려 박을 때)",
    },
    { id: 9, description: "손을 꽉 쥐면 팔꿈치가 아프다(악수할 때)" },
    { id: 10, description: "자다가 깬다" },
    { id: 11, description: "손가락 마디가 뻣뻣하면서 아프다" },
    { id: 12, description: "테니스를 치거나 무거운 물건을 들면 아프다" },
    { id: 13, description: "손바닥에 딱딱하게 굳은 구축이 있다" },
    {
      id: 14,
      description: "나사못 드라이버 같은 공구를 손바닥으로 잡기 어렵다",
    },
    { id: 15, description: "손바닥을 바늘로 콕콕 찌르는 느낌이 있다." },
    {
      id: 16,
      description: "두꺼운 천을 자르거나 정원일을 할 때 가위를 사용하기 어렵다",
    },
    { id: 17, description: "머리 뒤에 머리 핀을 꽂는 것을 못한다" },
    { id: 18, description: "컵을 쥔 손을 밖으로 돌리기 어렵다" },
    { id: 19, description: "엄지 손가락의 움직임이 둔하다" },
    { id: 20, description: "단추 채우기, 바느질 등이 어렵다" },
    { id: 21, description: "손가락 마디에 혹이 생겼다" },
  ],
  허리: [
    { id: 1, description: "몸통의 움직임이 많이 제한된다" },
    { id: 2, description: "걸상에서 일어나기와 계단을 오르기 어렵다" },
    { id: 3, description: "팔을 어깨 높이 이상 들어올리면 아프다" },
    { id: 4, description: "척추의 뼈가 지속해서 아픈 것으로 호소한다" },
    {
      id: 5,
      description:
        "지속적으로 통증이 나타난다. 통증은 움직임과 관계있고 음식을 먹거나 배변을 하는 것과는 상관이 없다",
    },
    { id: 6, description: "물건을 들기 위해서 허리를 숙이면 통증이 심해진다" },
  ],
  골반: [
    { id: 1, description: "낮은 의자에서 일어나기 어렵다" },
    { id: 2, description: "굳은 변을 볼 때 아프다" },
    { id: 3, description: "똑바로 서 있으면 허리통증이 심해진다" },
    { id: 4, description: "앉아 있는 것이 편하지 않다." },
    { id: 5, description: "대장이 가득 찬 느낌이 든다" },
    {
      id: 6,
      description: "자유형으로 수영을 할 때 엉덩이 부위의 통증이 심해진다",
    },
    { id: 7, description: "언덕을 오르거나 내려갈 때 무릎 뒤가 아프다" },
    { id: 8, description: "앉아 있으면 엉덩이가 아프다" },
    { id: 9, description: "앉아 있으면 안절부절못한다" },
    { id: 10, description: "오래 앉아 있으면 몸부림 친다" },
    { id: 11, description: "아픈 쪽으로 눕기 어렵다" },
    { id: 12, description: "걸으면 아프다" },
    { id: 13, description: "쭈그린 자세로 앉을 수 없다" },
    { id: 14, description: "걷다가 다리를 전다" },
    { id: 15, description: "의자에서 일어날 때 넓적다리 뒤가 아프다" },
    { id: 16, description: "남성인 경우 발기부전이 있다" },
    { id: 17, description: "여성인 경우 성관계를 할 때 아프다" },
    { id: 18, description: "아픈 쪽 다리가 붓는다" },
  ],
  다리: [
    { id: 1, description: "다리를 많이 구부리고 오래 동안 앉아 있으면 아프다" },
    { id: 2, description: "넓적다리의 앞부분에 감각이 이상하다" },
    { id: 3, description: "다리를 옆으로 벌리기 어렵다" },
    { id: 4, description: "옆으로 누워서 자다가 무릎이 아파서 깬다" },
    { id: 5, description: "계단을 내려갈 때 다리에 힘이 없다" },
    { id: 6, description: "자다가 깬다" },
    { id: 7, description: "울퉁불퉁한 길을 걷다가 무릎에 힘이 빠져 휘청한다" },
    { id: 8, description: "무릎이 휘청한다" },
    { id: 9, description: "계단을 오를 수 없다" },
    { id: 10, description: "무릎을 쭉 뻗기 어렵다" },
    { id: 11, description: "아픈 쪽으로 눕기 어렵다" },
    { id: 12, description: "무릎 종지뼈가 고정된다" },
    { id: 13, description: "슬개골이 고정되어 무릎을 펴기 어렵다" },
    { id: 14, description: "다리에 체중을 싣거나 몸을 비틀면 통증이 심해진다" },
    { id: 15, description: "다리를 바깥 쪽으로 돌리는 것이 제한된다" },
    { id: 16, description: "골반 속이 아프다" },
    {
      id: 17,
      description:
        "수면 중 다리를 편하게 두기 어려워 아프지 않은 쪽으로 누워서 다리사이에 베개를 넣는다",
    },
    { id: 18, description: "성관계를 할 때 아프다" },
    { id: 19, description: "걸으면 좋아진다" },
    { id: 20, description: "의자에서 일어날 때 넓적다리 뒤가 아프다" },
    { id: 21, description: "걸으면 배가 아프다" },
    { id: 22, description: "언덕이나 계단을 내려갈 때 무릎 뒤가 아프다" },
    { id: 23, description: "발을 끈다" },
    { id: 24, description: "발목이 약하다" },
    { id: 25, description: "걸을 때 발이 들리지 않는다" },
  ],
  발목: [
    { id: 1, description: "발목이 부러진 적이 있다" },
    { id: 2, description: "발목이 자주 삔다" },
    { id: 3, description: "발목이 불안정하다" },
    { id: 4, description: "발목이 약하다" },
    { id: 5, description: "걷다가 다리를 전다" },
    { id: 6, description: "밤에 종아리에 쥐가 난다" },
    { id: 7, description: "가파른 경사를 오를 때 무릎 뒤가 아프다" },
    { id: 8, description: "소아시절에 나타나는 성장통" },
    { id: 9, description: "밤에 발뒤꿈치가 아프다" },
    { id: 10, description: "발이 뒤로 제쳐지는 것이 제한된다" },
    { id: 11, description: "언덕을 오르거나 내려갈 때 무릎 뒤가 아프다" },
    { id: 12, description: "발과 발목이 부었다" },
    { id: 13, description: "허리가 아프다" },
    { id: 14, description: "무릎 뒤가 아프다" },
    {
      id: 15,
      description:
        "불규칙한 바닥을 걸을 때나 달리면 발과 아킬레스건 주변이 아프다",
    },
    {
      id: 16,
      description:
        "소아시절에 과도한 육체적인 활동 후에 나타나는 성장통이 있었다",
    },
    { id: 17, description: "밤에 쥐가 난다" },
    { id: 18, description: "걷는 동안 발에 힘이 약하다" },
    { id: 19, description: "신발을 바꾸거나 깔창을 맞추었다" },
    { id: 20, description: "다리를 절며 조금 밖에 걸을 수 없다" },
    { id: 21, description: "통증 때문에 걷기 어렵다" },
    { id: 22, description: "발이 저린다" },
    { id: 23, description: "발가락이 구부러졌다" },
  ],
};

interface SurveyRender extends Survey {
  isChecked: boolean;
}

export default function SurveyPage() {
  const { setRequest } = useAnalysisStore();
  const [selects, setSelects] = useState<SurveyRender[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const regionId = query.get("part") || "머리";
  // 현재 선택된 부위의 질문 가져오기
  const currentSurveys = surveys[regionId] || [];

  const handleSubmit = () => {
    setRequest(selects.map(({ description }) => description).join(" "));
    navigate("/pending");
  };

  useEffect(() => {
    console.log("선택된 설문 항목:", selects);
  }, [selects]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-6">
      <div className="bg-orange-50 shadow-lg rounded-xl w-4/5 max-w-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600">
          {regionId} 부분 설문 조사 진행
        </h1>
        <p className="text-center text-gray-500 mt-2">
          관련된 질문에 체크 후 제출 버튼을 눌러주세요.
        </p>
        <div className="mt-6 space-y-4">
          {currentSurveys.map(({ description, id }) => (
            <div
              key={id}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
                selects.find((select) => select.id === id)?.isChecked
                  ? "bg-orange-200 border border-orange-500"
                  : "bg-white border border-gray-300"
              }`}
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
            >
              <span className="text-gray-800">{description}</span>
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  selects.find((select) => select.id === id)?.isChecked
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-400"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <button
          className="mt-6 w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
          onClick={handleSubmit}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
