# element-content-hash

`element-content-hash` is a library for generating a unique identifier for an element, based on its contents.

## Usage

```javascript
import elementContentHash from "element-content-hash";

// Based on an existing element in the DOM
const h1 = document.body.querySelector("h1");
elementContentHash(h1); // => '123456789'

// Or based on an element you create
const div = document.createElement("div");
div.appendChild(document.createTextNode("hello, world"));
elementContentHash(div); // => '1634983957'
```

## Implementation

`element-content-hash` strips out any HTML attributes when computing the content hash (to avoid changing attributes appended by libaries like Vue.js). If you are passing:

- An img: only the src will be hashed
- Any other element: the `outerHTML` of the element will be used, the attributes will be stripped, and the remaining content hashed.
