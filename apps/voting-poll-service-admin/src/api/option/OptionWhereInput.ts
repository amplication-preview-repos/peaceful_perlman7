import { StringFilter } from "../../util/StringFilter";
import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";

export type OptionWhereInput = {
  id?: StringFilter;
  poll?: PollWhereUniqueInput;
  text?: StringNullableFilter;
  votes?: VoteListRelationFilter;
};
