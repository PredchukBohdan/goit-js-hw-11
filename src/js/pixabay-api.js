import axios from 'axios';

export default function axiosReguest(value) {
  const pixabayImages = axios.create({
    baseURL: 'https://pixabay.com/api',
    params: {
      key: '48820344-d1ffc058fda0b82549bb04a16',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return pixabayImages.get();
}
