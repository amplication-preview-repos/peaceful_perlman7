import { StringFilter } from "../../util/StringFilter";
import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OptionWhereInput = {
  id?: StringFilter;
  poll?: PollWhereUniqueInput;
  text?: StringNullableFilter;
  votes?: JsonFilter;
};
