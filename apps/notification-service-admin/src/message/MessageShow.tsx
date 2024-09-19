import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DELIVERY_TITLE_FIELD } from "../delivery/DeliveryTitle";
import { MESSAGE_TITLE_FIELD } from "./MessageTitle";
import { CHANNEL_TITLE_FIELD } from "../channel/ChannelTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="subject" source="subject" />
        <ReferenceField
          label="Template"
          source="template.id"
          reference="Template"
        >
          <TextField source={TEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Audit" target="messageId" label="Audits">
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
            <ReferenceField
              label="Message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="performedAt" source="performedAt" />
            <TextField label="performedBy" source="performedBy" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Delivery"
          target="messageId"
          label="Deliveries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Channel"
              source="channel.id"
              reference="Channel"
            >
              <TextField source={CHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="deliveredAt" source="deliveredAt" />
            <TextField label="deliveryStatus" source="deliveryStatus" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
