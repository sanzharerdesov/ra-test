import React from 'react';
import { Filter, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField } from 'react-admin';
import CompanyUrlField from './CompanyUrlField';

const AdminFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const AdminList = (props) => (
    <List filters = {<AdminFilter />} {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <CompanyUrlField source="website" />
        </Datagrid>
    </List>
);