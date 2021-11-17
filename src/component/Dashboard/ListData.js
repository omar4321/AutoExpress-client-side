import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Table } from 'react-bootstrap';

const ListData = (props) => {
  const { img, name, description, price, _id } = props.service || {};
  return (
    <Table striped bordered hover>
      <thead responsive="md">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>images</th>
          <th>description</th>
          <th>price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td>{img}</td>
          <td> {description} </td>
          <td>{price}</td>
          <td>
            {' '}
            <Button> Delete </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListData;
