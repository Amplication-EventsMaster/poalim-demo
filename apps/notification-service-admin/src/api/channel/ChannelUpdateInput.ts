import { InputJsonValue } from "../../types";
import { DeliveryUpdateManyWithoutChannelsInput } from "./DeliveryUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  configField?: InputJsonValue;
  deliveries?: DeliveryUpdateManyWithoutChannelsInput;
  typeField?: "Option1" | null;
};
