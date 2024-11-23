import { cn } from "fast-jsx/util";
import { useEffect, useState } from "react";

interface MuscleInformationProps {
  imageUrl: string;
  muscleName: string;
  description: string;
}

function removeSpecialCharacters(text: string) {
  return text.replace(/['"]/g, "");
}
export default function MuscleInformation({
  imageUrl,
  muscleName,
  description,
}: MuscleInformationProps) {
  console.log(imageUrl);
  const container = {
    displays: "flex flex-col",
    sizes: "h-100 w-full ",
    boundaries: "px-3.5",
  };
  const body = {
    displays: "flex justify-between",
  };
  const imagePath = ["/images/muscle", `/${muscleName}.jpg`].join("");
  const [imageExists, setImageExists] = useState<boolean | null>(null);
  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(imagePath, { method: "HEAD" }); // HTTP HEAD 요청
        setImageExists(response.ok); // 상태 코드가 200대이면 true
      } catch (error) {
        setImageExists(false); // 요청 실패 시
      }
    };
    checkImage();
  }, [imagePath]);
  useEffect(() => {
    console.log(imageExists);
  }, [imageExists]);
  return (
    <div className={cn(container)}>
      <div className="font-bold text-3xl">{muscleName}</div>
      <div className={cn(body)}>
        <img
          src={imageExists ? imagePath : "/images/muscle/default.png"}
          className="w-48 aspect-square border-2 rounded-md"
        />
        <div className="border-2 rounded-xl p-4">
          <div className="w-100 h-64 bg-gray-light p-1.5 text-sm">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
