import { AuditCreateNestedManyWithoutDeliveriesInput } from "./AuditCreateNestedManyWithoutDeliveriesInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type DeliveryCreateInput = {
  audits?: AuditCreateNestedManyWithoutDeliveriesInput;
  channel?: ChannelWhereUniqueInput | null;
  deliveredAt?: Date | null;
  deliveryStatus?: "Option1" | null;
  message?: MessageWhereUniqueInput | null;
};
