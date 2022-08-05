import React from "react";
import { Story } from '@storybook/react';

export default {
  title: 'Hooks/useCombineRefs()'
}

export const Usage: Story = function UseCombineRefs(){

  return <div>
    Combine multiple Refs.
  </div>

}

Usage.parameters = {
  docs: {
    source: {
      code: `const ref_1 = useRef();
const ref_2 = useRef();
const combinedRef = useCombineRefs([ ref_1, ref_2 ]);`,
      language: "jsx",
      type: "auto",
    },
  },
}