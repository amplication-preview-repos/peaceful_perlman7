import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type VoteCreateInput = {
  option?: OptionWhereUniqueInput | null;
  voter?: string | null;
};
