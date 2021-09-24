import React from 'react';
import ErrorIcon from '../../assets/sign-up/icon-cross.svg';
import './Input.css';

export default function Input({ type = 'text', className, placeholder, value, setValue, error, dropdownArray }) {
  return type === 'text' ? (
    <div className={`input-container ${className} ${error && 'input-error'}`}>
      <input
        className='body-s input'
        placeholder={placeholder}
        value={value.value}
        onChange={(e) => setValue({ value: e.target.value, error: value.error })}
      />
      <img src={ErrorIcon} className='error-icon' alt='Error icon' />
    </div>
  ) : (
    <div className={`input-container ${className}`}></div>
  );
}
