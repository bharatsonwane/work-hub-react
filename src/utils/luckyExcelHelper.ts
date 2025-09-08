import LuckyExcel from "@mertdeveci55/univer-import-export";

/**
 * Transform Excel file to Univer format using LuckyExcel (Promise-based)
 */
export const transformExcelToUniver = (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    LuckyExcel.transformExcelToUniver(
      file,
      (exportJson: any) => {
        console.log(`Successfully transformed file: ${file.name}`, exportJson);
        resolve(exportJson);
      },
      (error: any) => {
        console.error(`Error transforming file ${file.name}:`, error);
        reject(error);
      }
    );
  });
};

/**
 * Transform Univer workbook to Excel format using LuckyExcel (Promise-based)
 */
export const transformUniverToExcel = (
  snapshot: any,
  fileName: string,
  getBuffer: boolean = false
): Promise<any> => {
  return new Promise((resolve, reject) => {
    LuckyExcel.transformUniverToExcel({
      snapshot,
      fileName,
      getBuffer: getBuffer, // Set to true to get buffer instead of downloading
      success: (buffer?: any) => {
        console.log("Export successful, buffer received:", buffer);
        resolve(buffer);
      },
      error: (error: Error) => {
        console.error("Export failed", error);
        reject(error);
      },
    });
  });
};
