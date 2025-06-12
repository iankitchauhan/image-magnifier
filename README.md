# 📷 Image Magnifier

A lightweight, framework-agnostic Web Component to add a smooth image zoom/magnifier effect on hover — built using native JavaScript and Web Components. Works with any framework (React, Angular, Vue) or plain HTML.

---

## 🚀 Features

- ✅ Zero dependencies
- ✅ Easy to use with just one tag
- ✅ Compatible with any framework
- ✅ Customizable image size and magnification logic

---

## 📦 Installation

```bash
npm install easy-image-zoom

⚡ Framework Integration

🅰️ Angular
1. Import the component
In main.ts:
import 'easy-image-zoom';

2. Allow custom elements in your module
In app.module.ts:
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [/* your components */],
  imports: [/* your modules */],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

3. Use in a template

`<image-magnifier
  src="https://picsum.photos/id/1025/600/400"
  width="400"
  height="300"
  zoom="2">
</image-magnifier>`

⚛️ React
1. Import the component
import 'easy-image-zoom';

2. Use in JSX

`<image-magnifier
  src="https://picsum.photos/id/1025/600/400"
  width="400"
  height="300"
  zoom="2">
</image-magnifier>`

3. (Optional) Add TypeScript support
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'image-magnifier': any;
    }
  }
}

🖖 Vue
1. Import the component
In main.js or main.ts:
import 'easy-image-zoom';

2. Use in Vue template
`<template>
  <image-magnifier
    src="https://picsum.photos/id/1025/600/400"
    width="400"
    height="300"
    zoom="2">
  </image-magnifier>
</template>`












