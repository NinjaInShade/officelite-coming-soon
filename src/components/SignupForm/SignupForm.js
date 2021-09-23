import React from 'react';
import './SignupForm.css';

export default function SignupForm() {
  const validateForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className='form'>
      <button className='btn btn-primary' onClick={(e) => validateForm(e)}>
        Get on the list
      </button>
    </form>
  );
}
