import { AuditListRelationFilter } from "../audit/AuditListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageWhereInput = {
  audits?: AuditListRelationFilter;
  body?: StringNullableFilter;
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  template?: TemplateWhereUniqueInput;
};
