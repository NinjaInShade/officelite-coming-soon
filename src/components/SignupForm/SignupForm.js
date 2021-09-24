import React, { useState } from 'react';
import Input from '../Input/Input';
import './SignupForm.css';

const packsArray = [
  { name: 'Basic Pack', price: 'Free' },
  { name: 'Pro Pack', price: '$9.99' },
  { name: 'Ultimate Pack', price: '$19.99' },
];

export default function SignupForm() {
  const [name, setName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [pack, setPack] = useState({ value: '' });
  const [phone, setPhone] = useState({ value: '', error: false });
  const [company, setCompany] = useState({ value: '', error: false });

  const validateForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className='form'>
      <Input className='form-input' placeholder='Name' value={name} setValue={setName} error={name.error} />
      <Input className='form-input' placeholder='Email Address' value={email} setValue={setEmail} error={email.error} />
      <Input type='dropdown' className='form-input' value={pack} setValue={setPack} dropdownArray={packsArray} />
      <Input className='form-input' placeholder='Phone Number' value={phone} setValue={setPhone} error={phone.error} />
      <Input className='form-input' placeholder='Company' value={company} setValue={setCompany} error={company.error} />
      <button className='btn btn-primary' onClick={(e) => validateForm(e)}>
        Get on the list
      </button>
    </form>
  );
}
