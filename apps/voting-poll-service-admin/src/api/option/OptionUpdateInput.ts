import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { VoteUpdateManyWithoutOptionsInput } from "./VoteUpdateManyWithoutOptionsInput";

export type OptionUpdateInput = {
  poll?: PollWhereUniqueInput | null;
  text?: string | null;
  votes?: VoteUpdateManyWithoutOptionsInput;
};
