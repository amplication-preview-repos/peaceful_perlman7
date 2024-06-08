import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OptionCreateInput = {
  poll?: PollWhereUniqueInput | null;
  text?: string | null;
  votes?: InputJsonValue;
};
