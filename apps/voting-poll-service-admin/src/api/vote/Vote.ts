import { Option } from "../option/Option";

export type Vote = {
  createdAt: Date;
  id: string;
  option?: Option | null;
  updatedAt: Date;
  voter: string | null;
};
