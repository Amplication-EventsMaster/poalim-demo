import { AuditCreateNestedManyWithoutMessagesInput } from "./AuditCreateNestedManyWithoutMessagesInput";
import { DeliveryCreateNestedManyWithoutMessagesInput } from "./DeliveryCreateNestedManyWithoutMessagesInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageCreateInput = {
  audits?: AuditCreateNestedManyWithoutMessagesInput;
  body?: string | null;
  deliveries?: DeliveryCreateNestedManyWithoutMessagesInput;
  status?: "Option1" | null;
  subject?: string | null;
  template?: TemplateWhereUniqueInput | null;
};
