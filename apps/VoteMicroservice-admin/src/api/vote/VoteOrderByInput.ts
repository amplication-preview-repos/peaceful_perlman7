import { SortOrder } from "../../util/SortOrder";

export type VoteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  optionId?: SortOrder;
  updatedAt?: SortOrder;
  voter?: SortOrder;
};
