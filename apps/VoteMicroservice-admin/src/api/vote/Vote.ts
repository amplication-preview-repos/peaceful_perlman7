export type Vote = {
  createdAt: Date;
  id: string;
  optionId: string | null;
  updatedAt: Date;
  voter: string | null;
};
