import { Option } from "../option/Option";

export type Poll = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  options?: Array<Option>;
  title: string | null;
  updatedAt: Date;
};
