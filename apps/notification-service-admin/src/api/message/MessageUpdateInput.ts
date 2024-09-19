import { AuditUpdateManyWithoutMessagesInput } from "./AuditUpdateManyWithoutMessagesInput";
import { DeliveryUpdateManyWithoutMessagesInput } from "./DeliveryUpdateManyWithoutMessagesInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageUpdateInput = {
  audits?: AuditUpdateManyWithoutMessagesInput;
  body?: string | null;
  deliveries?: DeliveryUpdateManyWithoutMessagesInput;
  status?: "Option1" | null;
  subject?: string | null;
  template?: TemplateWhereUniqueInput | null;
};
