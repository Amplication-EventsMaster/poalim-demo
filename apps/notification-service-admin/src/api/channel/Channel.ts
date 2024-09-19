import { JsonValue } from "type-fest";
import { Delivery } from "../delivery/Delivery";

export type Channel = {
  configField: JsonValue;
  createdAt: Date;
  deliveries?: Array<Delivery>;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
