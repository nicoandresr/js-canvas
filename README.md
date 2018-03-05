# js-webcam
A simple utility for canvas operations.
# Using
install from npm
```
nmp -i js-canvas
```
you can create a canvas in the document:
```js
import Canvas from 'js-canvas';
```
here you can create a canvas for any operation.
```js
const width = 800;
const height = 600;
const canvas = Canvas.create(width, height);
```
also you can put a image data in the create method
```js
const imageData = new ImageData();
const canvas = Canvas.create(width, height, imageData);
```

