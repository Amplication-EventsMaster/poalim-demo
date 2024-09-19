import { Delivery } from "../delivery/Delivery";
import { Message } from "../message/Message";

export type Audit = {
  action: string | null;
  createdAt: Date;
  delivery?: Delivery | null;
  id: string;
  message?: Message | null;
  performedAt: Date | null;
  performedBy: string | null;
  updatedAt: Date;
};
