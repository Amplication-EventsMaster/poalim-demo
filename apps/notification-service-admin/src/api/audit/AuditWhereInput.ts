import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AuditWhereInput = {
  action?: StringNullableFilter;
  delivery?: DeliveryWhereUniqueInput;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  performedAt?: DateTimeNullableFilter;
  performedBy?: StringNullableFilter;
};
