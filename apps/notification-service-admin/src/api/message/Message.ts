import { Audit } from "../audit/Audit";
import { Delivery } from "../delivery/Delivery";
import { Template } from "../template/Template";

export type Message = {
  audits?: Array<Audit>;
  body: string | null;
  createdAt: Date;
  deliveries?: Array<Delivery>;
  id: string;
  status?: "Option1" | null;
  subject: string | null;
  template?: Template | null;
  updatedAt: Date;
};
