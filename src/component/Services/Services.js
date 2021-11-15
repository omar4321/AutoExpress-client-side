import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';

const Services = () => {
  const [service, setService] = useState([]);
  const [item, setItem] = useState(6);

  useEffect(() => {
    fetch('https://stark-shore-90581.herokuapp.com/carcollection')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container">
      <h1 className="m-5 text-center">
        Choose your Car <i class="fas fa-car-side"></i>
      </h1>
      <div className="row g-5">
        {service.slice(0, item).map((service, _id) => (
          <ServiceContent service={service} key={_id} />
        ))}

        <div className="text-center mb-5 ">
          {' '}
          <button
            className="btn-main    p-3 "
            onClick={() => setItem(service.length)}
          >
            <h6>
              {' '}
              See more <br /> <i class="fas fa-angle-down"></i>
            </h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
