import React, { useState } from 'react';
import ReactTable from 'react-table';

const Groups = (props) => {

    const columns = [{
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Monday',
        accessor: 'monday'
      },
      {
        Header: 'Tuesday',
        accessor: 'tuesday'
      },
      {
        Header: 'Wednesday',
        accessor: 'wednesday'
      },
      {
        Header: 'Thursday',
        accessor: 'thursday'
      },
      {
        Header: 'Friday',
        accessor: 'friday'
      },
      {
        Header: 'Total',
        accessor: 'total'
      },
      {
        Header: 'Points below 1st',
        accessor: 'belowFirst'
      }];

      const data = [{
        name: 'GK',
        monday: 1,
        tuesday: 1,
        wednesday: 1,
        thursday: 1,
        friday: 1,
        total: 50,
        belowFirst: 0
      }];

    return (<ReactTable 
                columns={columns}
                data={data}
            />);
}

export default Groups;

