import React from 'react';
import { Flex, Title, Input, Button } from '@common/component';
import { useInput } from 'hooks';

const Login = () => {
  const { value: IdValue, onChange: IdChange } = useInput('');
  const { value: PwValue, onChange: PwChange } = useInput('');
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
          <Button>button</Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default Login;
