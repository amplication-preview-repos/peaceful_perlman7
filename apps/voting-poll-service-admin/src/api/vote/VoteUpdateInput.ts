import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type VoteUpdateInput = {
  option?: OptionWhereUniqueInput | null;
  voter?: string | null;
};
