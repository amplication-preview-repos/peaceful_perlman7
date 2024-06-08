import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";

export const VoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="option.id" reference="Option" label="option">
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
        <TextInput label="voter" source="voter" />
      </SimpleForm>
    </Edit>
  );
};
