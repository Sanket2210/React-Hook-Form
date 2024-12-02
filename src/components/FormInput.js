import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  register,
  rules,
  errors,
  ...rest
}) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input
        type={type}
        {...register(name, rules)}
        {...rest}
        style={{
          padding: '10px',
          border: errors[name] ? '1px solid red' : '1px solid #ccc',
          borderRadius: '4px',
          width: '100%',
        }}
      />
      {errors[name] && (
        <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
