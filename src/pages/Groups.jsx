import React, { useState } from 'react';
import ReactTable from 'react-table';
import PlaceCell from '../components/PlaceCell';
var config = require('../config');

const Groups = (props) => {

    const getTotal = (result) => {
        let totalPoints = 0;
        const ratings = config.ratings;
        console.log(result);
        totalPoints+= ratings[result.monday-1];
        totalPoints+= ratings[result.tuesday-1];
        totalPoints+= ratings[result.wednesday-1];
        totalPoints+= ratings[result.thursday-1];
        totalPoints+= ratings[result.friday-1];

        return totalPoints;
    }
    const columns = [{
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Monday',
        accessor: 'monday',
        Cell: PlaceCell
      },
      {
        Header: 'Tuesday',
        accessor: 'tuesday',
        Cell: PlaceCell
      },
      {
        Header: 'Wednesday',
        accessor: 'wednesday',
        Cell: PlaceCell
      },
      {
        Header: 'Thursday',
        accessor: 'thursday',
        Cell: PlaceCell
      },
      {
        Header: 'Friday',
        accessor: 'friday',
        Cell: PlaceCell
      },
      {
        id: 'total',
        Header: 'Total',
        accessor: getTotal
      },
      {
        Header: 'Points below 1st',
        accessor: 'belowFirst'
      }];

      const data = [{
        name: 'GK',
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 1,
        belowFirst: 0
      }];

    return (<ReactTable 
                columns={columns}
                data={data}
            />);
}

export default Groups;

