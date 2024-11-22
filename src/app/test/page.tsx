import { toJson, toXlsx } from "@/util/xlsx";
import data from "@/asset/code.xlsx";
import { useEffect, useState } from "react";
export default function Page() {
  const [codes, setCodes] = useState<
    Record<string, string | number | undefined>[]
  >([]);
  useEffect(() => {
    const convertToFile = async () => {
      const response = await fetch(data);
      const blob = await response.blob();
      const file = new File([blob], "code.xlsx", {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      setCodes(await toJson(file));
    };
    convertToFile();
    console.log(codes);
  }, []);
  return (
    <div>
      <div>
        {codes.map((a) => {
          return Object.entries(a).map(([key, value]) => {
            return (
              <div key={key}>
                {key}: {value}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
