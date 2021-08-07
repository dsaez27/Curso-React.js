let heroImages = () => ({default: ''});
 
try {
  heroImages = require.context('../../../public/assets/heroes',true);
} catch (e){};
 
export const loadImage = (image) => (heroImages(`./${image}.jpg`).default);