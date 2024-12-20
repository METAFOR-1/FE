import { cn } from "fast-jsx/util";
import { useEffect } from "react";

interface MuscleInformationProps {
  imageUrl: string;
  muscleName: string;
  description: string;
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
  useEffect(() => {
    console.log(`/images/muscle/${muscleName}.jpg`);
  }, [muscleName]);
  return (
    <div className={cn(container)}>
      <div className="font-bold text-3xl">{muscleName}</div>
      <div className={cn(body)}>
        <img
          src={`/images/muscle/${muscleName}.jpg?timestamp=${Date.now()}`}
          alt={muscleName}
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
