import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "subject";

export const MessageTitle = (record: TMessage): string => {
  return record.subject?.toString() || String(record.id);
};
