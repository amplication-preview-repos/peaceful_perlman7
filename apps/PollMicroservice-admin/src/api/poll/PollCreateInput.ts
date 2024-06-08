import { OptionCreateNestedManyWithoutPollsInput } from "./OptionCreateNestedManyWithoutPollsInput";

export type PollCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  options?: OptionCreateNestedManyWithoutPollsInput;
  title?: string | null;
};
