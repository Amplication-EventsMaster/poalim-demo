import { SortOrder } from "../../util/SortOrder";

export type AuditOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  deliveryId?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  performedAt?: SortOrder;
  performedBy?: SortOrder;
  updatedAt?: SortOrder;
};
