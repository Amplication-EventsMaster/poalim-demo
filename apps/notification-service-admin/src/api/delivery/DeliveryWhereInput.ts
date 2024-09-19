import { AuditListRelationFilter } from "../audit/AuditListRelationFilter";
import { ChannelWhereUniqueInput } from "../channel/ChannelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type DeliveryWhereInput = {
  audits?: AuditListRelationFilter;
  channel?: ChannelWhereUniqueInput;
  deliveredAt?: DateTimeNullableFilter;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
};
