import { MessageCreateNestedManyWithoutTemplatesInput } from "./MessageCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  messages?: MessageCreateNestedManyWithoutTemplatesInput;
  name?: string | null;
};
