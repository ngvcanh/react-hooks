# react-hooks
Customize hooks for React

## Installation

```sh
npm install @kensoni/react-hooks

# Or yarn
yarn add @kensoni/react-hooks
```

## Preview with Storybook

```
git clone https://github.com/ngvcanh/react-hooks.git
cd react-hooks
yarn install
yarn start
```

[Live demo](https://ngvcanh.github.io/react-hooks)



## useClickOutside()

Listen events when click/touch outside the element.

```tsx
import { useRef } from 'react';
import useClickOutside from '@kensoni/react-hooks/useClickOutside';

export default function App(){

  const element = useRef<HTMLDivElement>(null);

  useClickOutside(() => {
    console.log('Clicked outside box');
  }, element);

  return <div>
    <div 
      style={{ width: 100, height: 100, backgroundColor: '#fff' }} 
      ref={ element }
    >Click outside me</div>
  </div>

}
```

## useCombineRefs()

Combine multiple Refs to one.

```tsx
import { useRef } from 'react';
import useCombineRefs from '@kensoni/react-hooks/useCombineRefs';

export default function App(){

  const ref_1 = useRef();
  const ref_2 = useRef();

  const combinedRef= useCombineRefs([ ref_1, ref_2 ]);

  return <div>
    App
  </div>

}
```

## useScrollbarSize()

Get scrollbar size on browser.

```tsx
import useScrollbarSize from '@kensoni/react-hooks/useScrollbarSize';

export default function App(){

  const size = useScrollbarSize();

  return <div>
    App
  </div>

}
```

## useWindowResize()

Listen when window resize.

The callback do not apply when first render component.

```tsx
import useWindowResize from '@kensoni/react-hooks/useWindowResize';

export default function App(){

  const size = useWindowResize(() => {
    console.log('Window resized.')
  });

  return <div>
    App
  </div>

}
```