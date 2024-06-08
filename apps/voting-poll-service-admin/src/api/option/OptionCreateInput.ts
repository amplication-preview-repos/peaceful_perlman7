import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { VoteCreateNestedManyWithoutOptionsInput } from "./VoteCreateNestedManyWithoutOptionsInput";

export type OptionCreateInput = {
  poll?: PollWhereUniqueInput | null;
  text?: string | null;
  votes?: VoteCreateNestedManyWithoutOptionsInput;
};
