# 3D Attraction

A library to rotate DOM elements in 3D space based on mouse movement. [Demo on CodePen](https://codepen.io/chambaz/pen/EygZMw).

**Getting Started**

Install with NPM

```bash
$ npm i --save 3d-attraction
```

Require the module

```javascript
const attract = require('3d-attraction')
```

Add data attributes to the container and target. Container is the area the mouse movement is relative too, and target is the element that will be transformed.

```html
<div class="my-container" data-3d-attract-container>
  <div class="my-target-parent">
    <div class="my-target" data-3d-attract></div>
  </div>
</div>
```

Add CSS and tweak values to your desire

```css
/* perspective should be added to target parent not necessarily the container */
.my-target-parent {
  perspective: 400px;
}

.my-target {
  transform-style: preserve-3d;
  transition: 1.5s ease-out;
}
```