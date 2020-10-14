import envDev from './env.dev';
import envProd from './env.prod';

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

export default Object.assign(
  {
    // Core environment properties.
    isDev: !isProd,
  },
  {
    // Add non-environment specific defaults here
    theme: 'default',
  },
  {
  name: 'Rapio Eats',
  brand: {
    logo: './assets/img/logo-removebg-preview.png',
    cutlery: './assets/img/cutlery.png',
    truck: './assets/img/cargo-truck.png',
    like: './assets/img/like.png',
    beer: './assets/img/beer.png',
  },
  sitekey: '6LcTbMsZAAAAACVmej2wxuMvXFK9Xi2F6m93OIRq',
  secretkey : '6LcTbMsZAAAAAPQKLXsPkWy76Qx_fVk5y7BLiNqy',
  },

  isProd ? envProd : envDev,
);
