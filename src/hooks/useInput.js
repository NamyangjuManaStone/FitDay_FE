import { useCallback, useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  const onChangeValue = useCallback((e) => setValue(e.target.value), []);

  return [value, onChangeValue, setValue];
};

export default useInput;
