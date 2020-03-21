import React from 'react';
import { Admin, Resource } from 'react-admin';
import fakeRestProvider from 'ra-data-fakerest';
import data from './data';

import {AdminList} from './components/AdminList';

const dataProvider = fakeRestProvider(data, true);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={AdminList} />
    </Admin>
);

export default App;
