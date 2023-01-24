import React, { useContext } from 'react';
import { Flex, Title, Input, Button } from '@common/component';
import { useInput } from '@common/hooks';
import { UserContext } from 'utils';
import axios from 'axios';

const Login = () => {
  const { value: IdValue, onChange: IdChange } = useInput('');
  const { value: PwValue, onChange: PwChange } = useInput('');
  const { setUserInfo } = useContext(UserContext);

  const Login = ({ uid, pw }: { uid: string; pw: string }) => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', { uid, pw })
      .then(result => {
        setUserInfo(result.data);
      });
  };

  return (
    <Flex height="h-screen" center col gap="gap-4">
      <Title>MONOREPO-APP</Title>

      <div className="w-[240px]">
        <Flex col gap="gap-2">
          <Input
            value={IdValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => IdChange(e)}
          />
          <Input
            value={PwValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => PwChange(e)}
          />
          <Button onClick={() => Login({ uid: IdValue, pw: PwValue })}>
            button
          </Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default Login;
