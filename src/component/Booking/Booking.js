import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Navber from '../Home/Navber/Navber';

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const email = sessionStorage.getItem('email');
  console.log(email);
  useEffect(() => {
    fetch(`https://immense-citadel-04448.herokuapp.com/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   data.email = email;
  //   data.status = 'pending';

  //   fetch('https://stark-shore-90581.herokuapp.com/confirmOrder', {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  //   console.log(data);
  // };

  const onSubmit = (data) => {
    data.email = email;
    console.log(data);
  };
  return (
    <div>
      <Navber />
      <h1 className="m-4"> Your Order</h1>

      <div className="booking-container">
        <div className="row container">
          <div className="col-md-8">
            <div className="details-img">
              <img className="w-75" src={service?.img} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> price: {service?.price} $</h1>
          </div>
          <div className="col-md-4 ">
            <h1>booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('name')}
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register('date')}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register('comments')}
                placeholder="comments"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register('price', { required: true })}
                defaultValue={service?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register('image', { required: true })}
                defaultValue={service?.img}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50 mb-5"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
