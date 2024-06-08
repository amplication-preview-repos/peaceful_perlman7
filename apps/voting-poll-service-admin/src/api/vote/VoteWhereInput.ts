import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VoteWhereInput = {
  id?: StringFilter;
  option?: OptionWhereUniqueInput;
  voter?: StringNullableFilter;
};
