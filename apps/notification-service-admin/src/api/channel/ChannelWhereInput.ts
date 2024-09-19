import { JsonFilter } from "../../util/JsonFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ChannelWhereInput = {
  configField?: JsonFilter;
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  typeField?: "Option1";
};
