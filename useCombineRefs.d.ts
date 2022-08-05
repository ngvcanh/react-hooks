import React, { Ref } from "react";
export default function useCombineRefs<T>(refs: Array<Ref<T>>): React.MutableRefObject<T | null>;
