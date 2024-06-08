import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OptionUpdateInput = {
  poll?: PollWhereUniqueInput | null;
  text?: string | null;
  votes?: InputJsonValue;
};
