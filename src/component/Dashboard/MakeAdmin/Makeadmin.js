import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './admin.css';

const Makeadmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handdleAdminSubmit = (e) => {
    const user = { email };
    fetch('https://immense-citadel-04448.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail('');
          console.log(data);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="text-center  w-50 m-auto">
      <h3> Make admin</h3>
      <from>
        <label for="email"> Email:-- </label>
        <input
          type="email"
          id="email"
          name="enmail"
          placeholder="enter email"
          required
          onBlur={handleOnBlur}
        />
        <button
          onClick={handdleAdminSubmit}
          type="submit"
          className="admin-btn"
        >
          {' '}
          Make Admin
        </button>
      </from>
      {success && <h3>Successfully made admin</h3>}
    </div>
  );
};

export default Makeadmin;
