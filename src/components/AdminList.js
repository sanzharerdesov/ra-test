import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import CompanyUrlField from './CompanyUrlField';

export const AdminList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <CompanyUrlField source="website" />
        </Datagrid>
    </List>
);