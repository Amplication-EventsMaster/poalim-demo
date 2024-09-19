import { Audit } from "../audit/Audit";
import { Channel } from "../channel/Channel";
import { Message } from "../message/Message";

export type Delivery = {
  audits?: Array<Audit>;
  channel?: Channel | null;
  createdAt: Date;
  deliveredAt: Date | null;
  deliveryStatus?: "Option1" | null;
  id: string;
  message?: Message | null;
  updatedAt: Date;
};
