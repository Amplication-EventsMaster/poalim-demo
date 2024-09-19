import { AuditUpdateManyWithoutDeliveriesInput } from "./AuditUpdateManyWithoutDeliveriesInput";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type DeliveryUpdateInput = {
  audits?: AuditUpdateManyWithoutDeliveriesInput;
  channel?: ChannelWhereUniqueInput | null;
  deliveredAt?: Date | null;
  deliveryStatus?: "Option1" | null;
  message?: MessageWhereUniqueInput | null;
};
