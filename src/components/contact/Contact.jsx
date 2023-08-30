import React from 'react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handle = (e) => {
    e.preventDefault();
  };

  const inputs = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Enter Username',
      required: true,
      pattern: '^[A-Za-z][A-Za-z0-9_]{7,29}$',
      onChange: onChange,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter Email',
      required: true,
      pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+/.[a-zA-Z]{2,}',
      onChange: onChange,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      required: true,
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      onChange: onChange,
    },
  ];

  return (
    <>

      <div className='main-contact'>
        <div className='contact-border'>
          <h2>Contact Us</h2>
          <form onSubmit={handle}>
            {inputs.map((input) => (
              <input
                key={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                required={input.required}
                pattern={input.pattern}
                onChange={input.onChange}
              />
            ))}
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default Contact;
