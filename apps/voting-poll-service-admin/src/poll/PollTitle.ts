import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "title";

export const PollTitle = (record: TPoll): string => {
  return record.title?.toString() || String(record.id);
};
