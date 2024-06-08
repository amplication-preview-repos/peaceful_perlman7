import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="option ID" source="optionId" />
        <TextInput label="voter" source="voter" />
      </SimpleForm>
    </Edit>
  );
};
