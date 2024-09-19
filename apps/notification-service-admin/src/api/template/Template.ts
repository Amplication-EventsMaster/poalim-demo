import { Message } from "../message/Message";

export type Template = {
  content: string | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
};
