import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="option ID" source="optionId" />
        <TextInput label="voter" source="voter" />
      </SimpleForm>
    </Create>
  );
};
