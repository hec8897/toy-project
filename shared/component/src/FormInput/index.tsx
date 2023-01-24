import React, { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput {
  type: 'text' | 'password';
}

interface Iprops extends IInput {
  register?: UseFormRegisterReturn;
}

const Input = forwardRef<HTMLInputElement, Iprops>((props, ref) => {
  const { register, type } = props;
  return <input type={type} className="border" {...register} />;
});

export default Input;
