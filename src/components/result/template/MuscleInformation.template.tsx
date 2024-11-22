import { cn } from "fast-jsx/util";

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
  const container = {
    displays: "flex flex-col",
    sizes: "h-100 w-full ",
    boundaries: "px-3.5",
  };
  const body = {
    displays: "flex justify-between",
  };
  return (
    <div className={cn(container)}>
      <div className="font-bold text-3xl">{muscleName}</div>
      <div className={cn(body)}>
        <img src={imageUrl} className="h-full aspect-square" />
        <div className="border-2 rounded-xl p-4">
          <div className="w-80 h-full bg-gray-light p-1.5">{description}</div>
        </div>
      </div>
    </div>
  );
}
