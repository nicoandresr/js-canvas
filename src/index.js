function create(width = 100, height = 100, imageData) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(width);
  canvas.height = Math.floor(height);
  if (imageData) { canvas.getContext('2d').putImageData(imageData, 0, 0); }
  canvas.toBlob = canvas.toBlob || canvas.msToBlob;
  return canvas;
}

export default { create };

