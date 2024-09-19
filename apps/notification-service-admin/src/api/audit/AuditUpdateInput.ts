import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type AuditUpdateInput = {
  action?: string | null;
  delivery?: DeliveryWhereUniqueInput | null;
  message?: MessageWhereUniqueInput | null;
  performedAt?: Date | null;
  performedBy?: string | null;
};
