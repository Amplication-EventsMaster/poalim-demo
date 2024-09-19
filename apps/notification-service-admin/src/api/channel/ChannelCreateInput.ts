import { InputJsonValue } from "../../types";
import { DeliveryCreateNestedManyWithoutChannelsInput } from "./DeliveryCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  configField?: InputJsonValue;
  deliveries?: DeliveryCreateNestedManyWithoutChannelsInput;
  typeField?: "Option1" | null;
};
