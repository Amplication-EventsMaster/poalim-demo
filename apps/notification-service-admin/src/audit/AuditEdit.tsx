import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DeliveryTitle } from "../delivery/DeliveryTitle";
import { MessageTitle } from "../message/MessageTitle";

export const AuditEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <ReferenceInput
          source="delivery.id"
          reference="Delivery"
          label="Delivery"
        >
          <SelectInput optionText={DeliveryTitle} />
        </ReferenceInput>
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <DateTimeInput label="performedAt" source="performedAt" />
        <TextInput label="performedBy" source="performedBy" />
      </SimpleForm>
    </Edit>
  );
};
