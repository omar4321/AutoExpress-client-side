import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import Showdata from '../Showdata';
import './addcar.css';

const Addnewcar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post('https://immense-citadel-04448.herokuapp.com/carcollection', data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert('added successfully');
          reset();
        }
      });
    console.log(data);
  };
  return (
    <>
      <div className="add-service w-50 m-auto">
        <h1 className="text-center">Add new car for sell</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register('name')} placeholder="enter name" />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('description')} placeholder="description" />
          <input type="number" {...register('price')} placeholder="price" />
          <input {...register('img')} placeholder="img-url" />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
      <br />
      <Showdata> </Showdata>
    </>
  );
};

export default Addnewcar;
