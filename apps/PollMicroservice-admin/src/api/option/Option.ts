import { Poll } from "../poll/Poll";
import { JsonValue } from "type-fest";

export type Option = {
  createdAt: Date;
  id: string;
  poll?: Poll | null;
  text: string | null;
  updatedAt: Date;
  votes: JsonValue;
};
