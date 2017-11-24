## Stickier -  Sticky React Component

Stickier is a React component wrapper, that uses `position: sticky` in browsers
that support this property, and for browsers that do not support it,
[this awesome polyfill by wilddeer](https://github.com/wilddeer/stickyfill) is used.

## How to use

```sh
npm install react-stickier
```

` import Sticky from 'react-stickier'`

```js
<Sticky>Your component</Sticky>
```


[Demo](https://uroswork.github.io/react-stickier/)


## Props

- `style` - CSS styles to be applied to the component. Please note that `position` will remain sticky, and if you do not pass top/bottom they will remain 0

- `className` - CSS class to be applied to the component. Default class is `StickyElement`

Any other props will be passed to the component (for example this is useful for aria-* props).

## Examples
- Adding classes :

```js
<Sticky className={ 'customClass1 customClass2' }>
  Your component
</Sticky>
```

- Adding styles :

```js
<Sticky style={ { backgroundColor: 'red' } }>
  Your component
</Sticky>
```
