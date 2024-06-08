import { Poll } from "../poll/Poll";
import { Vote } from "../vote/Vote";

export type Option = {
  createdAt: Date;
  id: string;
  poll?: Poll | null;
  text: string | null;
  updatedAt: Date;
  votes?: Array<Vote>;
};
