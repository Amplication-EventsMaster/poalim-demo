import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type AuditCreateInput = {
  action?: string | null;
  delivery?: DeliveryWhereUniqueInput | null;
  message?: MessageWhereUniqueInput | null;
  performedAt?: Date | null;
  performedBy?: string | null;
};
