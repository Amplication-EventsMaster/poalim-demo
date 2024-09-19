import { MessageUpdateManyWithoutTemplatesInput } from "./MessageUpdateManyWithoutTemplatesInput";

export type TemplateUpdateInput = {
  content?: string | null;
  createdBy?: string | null;
  messages?: MessageUpdateManyWithoutTemplatesInput;
  name?: string | null;
};
