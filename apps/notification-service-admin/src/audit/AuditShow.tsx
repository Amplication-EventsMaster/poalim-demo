import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DELIVERY_TITLE_FIELD } from "../delivery/DeliveryTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";

export const AuditShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Delivery"
          source="delivery.id"
          reference="Delivery"
        >
          <TextField source={DELIVERY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="performedAt" source="performedAt" />
        <TextField label="performedBy" source="performedBy" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
