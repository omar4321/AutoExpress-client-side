import React, { useEffect, useState } from 'react';

import ListData from './ListData';

const Showdata = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('https://immense-citadel-04448.herokuapp.com/carcollection')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h1 className="text-center">Products List</h1>
      {service.map((service, _id) => (
        <ListData service={service} key={_id} />
      ))}
    </div>
  );
};

export default Showdata;
