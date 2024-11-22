import * as XLSX from "xlsx";
export function toXlsx({
  fileName,
  data,
}: {
  fileName?: string;
  data: Record<string, string | number | undefined>[];
}) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  return XLSX.writeFile(workbook, `${fileName ?? "result"}.xlsx`);
}

export async function toJson<T extends string>(
  file: File
): Promise<Record<T, string | number | undefined>[]> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet, {
          defval: undefined,
          raw: false,
        });
        resolve(json as Record<string, string | number | undefined>[]);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
}
