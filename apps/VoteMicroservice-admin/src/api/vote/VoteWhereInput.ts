import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VoteWhereInput = {
  id?: StringFilter;
  optionId?: StringNullableFilter;
  voter?: StringNullableFilter;
};
