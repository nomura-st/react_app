import { OfficeInfo } from "./OfficeInfo";

/**
 * 社員情報型定義
 */
export type WorkerInfo = {
  id: string;
  name: string;
  birthday: Date;
  office: OfficeInfo;
};
