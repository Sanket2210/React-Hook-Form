import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from './FormInput';

// Validation schema using Yup
const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
    phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^\+\d{1,3}-\d{9,15}$/,
      'Phone number must be in the format +<country code>-<number>'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
 confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  age: yup
    .number()
    .required('Age is required')
    .min(18, 'You must be at least 18 years old'),
 address: yup
    .string()
    .required('Address is required')
    .matches(
      /^[0-9]+\s[a-zA-Z\s]+$/,
      'Address must start with a number followed by a street name'
    )
    .min(10, 'Address must be at least 10 characters long')
    .max(100, 'Address cannot exceed 100 characters'),
});

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px', margin: '0 auto' }}>
      <FormInput
        label="Username"
        name="username"
        type="text"
        register={register}
        rules={{ required: true }}
        errors={errors}
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        errors={errors}
      />
      <FormInput
  label="Phone Number"
  name="phoneNumber"
  type="tel"
  register={register}
  errors={errors}
  placeholder="+91-1234567890"
/>
      <FormInput
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
      />
      <FormInput
  label="Confirm Password"
  name="confirmPassword"
  type="password"
  register={register}
  errors={errors}
  />

      <FormInput
        label="Age"
        name="age"
        type="number"
        register={register}
        errors={errors}
      />
      <FormInput
  label="Address"
  name="address"
  type="text"
  register={register}
  errors={errors}
  placeholder="123 Main Street"
/>
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
