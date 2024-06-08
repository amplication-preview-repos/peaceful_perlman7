import { Vote as TVote } from "../api/vote/Vote";

export const VOTE_TITLE_FIELD = "optionId";

export const VoteTitle = (record: TVote): string => {
  return record.optionId?.toString() || String(record.id);
};
