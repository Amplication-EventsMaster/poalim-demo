import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DELIVERY_TITLE_FIELD } from "../delivery/DeliveryTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";

export const AuditList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Audits"} perPage={50} pagination={<Pagination />}>
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
        <ReferenceField label="Message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="performedAt" source="performedAt" />
        <TextField label="performedBy" source="performedBy" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
