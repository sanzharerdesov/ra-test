import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const AdminList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);