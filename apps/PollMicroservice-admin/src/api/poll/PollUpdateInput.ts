import { OptionUpdateManyWithoutPollsInput } from "./OptionUpdateManyWithoutPollsInput";

export type PollUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  options?: OptionUpdateManyWithoutPollsInput;
  title?: string | null;
};
