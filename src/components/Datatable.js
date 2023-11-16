import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Nome',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'E-mail',
    selector: 'email',
    sortable: true,
  },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
];

const CustomDataTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default CustomDataTable;