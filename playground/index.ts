import { imageWire } from '../src/image-wire';

const input = document.querySelector('input');
const img = document.querySelector('img');

input.addEventListener('change', async (e) => {
  const { files } = e.target as HTMLInputElement;
  const [src] = await imageWire(files);
  img.src = src;
});
