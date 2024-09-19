import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
};
