import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OptionTitle } from "../option/OptionTitle";

export const VoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="option.id" reference="Option" label="option">
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
        <TextInput label="voter" source="voter" />
      </SimpleForm>
    </Create>
  );
};
