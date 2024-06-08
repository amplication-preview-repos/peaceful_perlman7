import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";

export type PollWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  options?: OptionListRelationFilter;
  title?: StringNullableFilter;
};
