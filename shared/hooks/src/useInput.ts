import { useEffect, useState } from 'react';

interface hookType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

const useInput = (defaultValue: string): hookType => {
  const [value, setValue] = useState(defaultValue);
  const onReset = () => {
    setValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return { value, onChange, onReset };
};

export default useInput;
