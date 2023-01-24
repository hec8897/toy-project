import React, { useContext, useCallback } from 'react';
import { Flex, Title, FormInput, Button } from '@common/component';
import { UserContext } from 'utils';
import axios from 'axios';
import { useForm } from 'react-hook-form';

interface IData {
  uid: string;
  password: string;
}

const initialState: IData = {
  uid: 'test',
  password: '',
};

const Login = () => {
  const { setUserInfo } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IData>({
    defaultValues: initialState,
  });

  const submit = useCallback(async (data: IData) => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', { ...data })
      .then(result => {
        setUserInfo(result.data);
      });
  }, []);

  return (
    <Flex height="h-screen" center col gap="gap-4">
      <Title>MONOREPO-APP</Title>

      <div className="w-[240px]">
        <form onSubmit={handleSubmit(submit)}>
          <Flex col gap="gap-2">
            <FormInput type="text" register={register('uid')} />
            <FormInput type="password" register={register('password')} />
            <Button label="로그인" />
          </Flex>
        </form>
      </div>
    </Flex>
  );
};

export default Login;
