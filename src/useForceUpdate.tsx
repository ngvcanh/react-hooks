import { useState } from "react";

export default function useForceUpdate(){
  const [ value, setValue ] = useState(true);

  return function forceUpdate(){
    setValue(!value);
  }
}