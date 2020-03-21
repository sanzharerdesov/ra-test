import React from 'react';

const CompanyUrlField = ({ record = {}, source }) =>
    <a href={record[source]}>
        {record.company.name}
    </a>;

export default CompanyUrlField;