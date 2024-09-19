import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  channelId?: SortOrder;
  createdAt?: SortOrder;
  deliveredAt?: SortOrder;
  deliveryStatus?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  updatedAt?: SortOrder;
};
