import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (value) => {
    setValue(value.target.value);
  };
  return { value, onChange };
};
export default useInputState;
