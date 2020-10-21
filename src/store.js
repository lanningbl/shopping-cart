import React, { createContext, useReducer } from 'react';

const initialState = {
  products: [
    {
      name: 'Apple 16" MacBook Pro',
      released: 'Late 2019',
      colors: ['Silver', 'Space Gray'],
      images: {
        Silver: [
          require('./assets/img/macbook-pro-late-2019-16-silver_1.webp'),
          require('./assets/img/macbook-pro-late-2019-16-silver_2.webp'),
          require('./assets/img/macbook-pro-late-2019-16-silver_3.jpg'),
          require('./assets/img/macbook-pro-late-2019-16-silver_4.jpg'),
          require('./assets/img/macbook-pro-late-2019-16-silver_5.webp'),
          require('./assets/img/macbook-pro-late-2019-16-silver_6.webp'),
        ],
        'Space Gray': [
          require('./assets/img/macbook-pro-late-2019-16-space-gray_1.webp'),
          require('./assets/img/macbook-pro-late-2019-16-space-gray_2.webp'),
          require('./assets/img/macbook-pro-late-2019-16-space-gray_3.jpg'),
          require('./assets/img/macbook-pro-late-2019-16-space-gray_4.jpg'),
          require('./assets/img/macbook-pro-late-2019-16-space-gray_5.webp'),
          require('./assets/img/macbook-pro-late-2019-16-space-gray_6.webp'),
        ],
      },
      processors: [
        '2.6GHz Intel Core i7 6 Core (9th Gen)',
        '2.3GHz Intel Core i9 8 Core (9th Gen)',
        '2.4GHz Intel Core i9 8 Core (9th Gen)',
      ],
      storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
      memory: ['16GB', '32GB', '64GB'],
      graphics: [
        'AMD Radeon Pro 5300M (4GB GDDR6)',
        'AMD Radeon Pro 5500M (4GB GDDR6)',
        'AMD Radeon Pro 5500M (8GB GDDR6)',
        'AMD Radeon Pro 5600M (8GB HBM2)',
      ],
      configurations: ['Base', 'w/ AppleCare+'],
      desc:
        'The Apple 16" MacBook Pro features a 16" Retina Display, a Magic Keyboard with a redesigned...',
      reviews: [
        { name: 'brady', star: 5 },
        { name: 'athena', star: 4 },
      ],
    },
  ],
  items: [
    // {
    //   id: 1,
    //   mfr: '81Y60004US',
    //   title: 'Lenovo 15.6" Legion 5 Gaming Laptop',
    //   regularPrice: 1599,
    //   salePrice: 1299,
    //   stock: 1,
    //   images: [require('./assets/img/lenovo_1.jpg'), require('./assets/img/lenovo_2.webp')],
    //   brand: 'Lenovo',
    // },
    {
      id: 1,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'MVVL2LL/A',

      regularPrice: 2399,
      salePrice: 2099,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 2,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'MVVJ2LL/A',
      regularPrice: 2399,
      salePrice: 2099,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 3,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.4GHz Intel Core i9 8 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-45-BH',
      regularPrice: 2699,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 4,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.4GHz Intel Core i9 8 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-45-BH',
      regularPrice: 2699,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 5,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.3GHz Intel Core i9 8 Core (9th Gen)',
      storage: '1TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5500M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'MVVM2LL/A',
      salePrice: 2449,
      regularPrice: 2799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 6,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.3GHz Intel Core i9 8 Core (9th Gen)',
      storage: '1TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5500M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'MVVK2LL/A',
      salePrice: 2449,
      regularPrice: 2799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 7,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-03-BH',
      regularPrice: 2599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 8,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-03-BH',
      regularPrice: 2599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 9,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-06-BH',
      regularPrice: 2999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 10,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-06-BH',
      regularPrice: 2999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 11,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-09-BH',
      regularPrice: 3599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 12,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-09-BH',
      regularPrice: 3599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 13,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-12-BH',
      regularPrice: 4799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 14,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-12-BH',
      regularPrice: 4799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 15,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-15-BH',
      regularPrice: 2799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 16,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-15-BH',
      regularPrice: 2799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 17,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-30-BH',
      regularPrice: 3199,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 18,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-30-BH',
      regularPrice: 3199,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 19,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-03-BH',
      regularPrice: 2599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 20,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-03-BH',
      regularPrice: 2599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 21,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-18-BH',
      regularPrice: 2999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 22,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-18-BH',
      regularPrice: 2999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 23,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-33-BH',
      regularPrice: 3399,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 24,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '1TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-33-BH',
      regularPrice: 3399,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 25,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-06-BH',
      regularPrice: 2999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 26,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-06-BH',
      regularPrice: 2999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 27,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-21-BH',
      regularPrice: 3399,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 28,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-21-BH',
      regularPrice: 3399,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 29,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-36-BH',
      regularPrice: 3799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 30,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '2TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-36-BH',
      regularPrice: 3799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 31,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-09-BH',
      regularPrice: 3599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 32,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-09-BH',
      regularPrice: 3599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 33,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-24-BH',
      regularPrice: 3999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 34,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-24-BH',
      regularPrice: 3999,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 35,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-39-BH',
      regularPrice: 4399,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 36,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '4TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-39-BH',
      regularPrice: 4399,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 37,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-12-BH',
      regularPrice: 4799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 38,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-12-BH',
      regularPrice: 4799,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 39,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-27-BH',
      regularPrice: 5199,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 40,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-27-BH',
      regularPrice: 5199,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 41,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-27-BH',
      regularPrice: 5199,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 42,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '32GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-27-BH',
      regularPrice: 5199,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 43,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-42-BH',
      regularPrice: 5599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 44,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '8TB',
      memory: '64GB',
      graphics: 'AMD Radeon Pro 5300M (4GB GDDR6)',
      configuration: 'Base',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-42-BH',
      regularPrice: 5599,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 45,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5500M (8GB GDDR6)',
      configuration: 'w/ AppleCare+',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-02-BH',
      regularPrice: 2749,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 46,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5500M (8GB GDDR6)',
      configuration: 'w/ AppleCare+',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-02-BH',
      regularPrice: 2749,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 47,
      title: 'Apple 16" MacBook Pro',
      color: 'Silver',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5600M (8GB HBM2)',
      configuration: 'w/ AppleCare+',
      released: 'Late 2019',
      mfr: 'Z0Y1-MVVL-48-BH',
      regularPrice: 3349,
      stock: 10,
      brand: 'Apple',
    },
    {
      id: 48,
      title: 'Apple 16" MacBook Pro',
      color: 'Space Gray',
      processor: '2.6GHz Intel Core i7 6 Core (9th Gen)',
      storage: '512GB',
      memory: '16GB',
      graphics: 'AMD Radeon Pro 5600M (8GB HBM2)',
      configuration: 'w/ AppleCare+',
      released: 'Late 2019',
      mfr: 'Z0XZ-MVVJ-48-BH',
      regularPrice: 3349,
      stock: 10,
      brand: 'Apple',
    },
  ],
  cart: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  let index, price;
  switch (action.type) {
    case 'ADD_TO_CART':
      index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (action.payload.salePrice) {
        price = action.payload.salePrice;
      } else {
        price = action.payload.regularPrice;
      }
      if (index >= 0) {
        console.log(state.cart[index].quantity);
        state.cart[index].quantity += 1;
        return {
          ...state,
          total: state.total + price,
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            title: action.payload.title,
            desc: action.payload.desc,
            regularPrice: action.payload.regularPrice,
            salePrice: action.payload.salePrice,
            color: action.payload.color,
            quantity: 1,
          },
        ],
        total: state.total + price,
      };
    case 'REMOVE_ONE_OF_ITEM_FROM_CART':
      index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (action.payload.salePrice) {
        price = action.payload.salePrice;
      } else {
        price = action.payload.regularPrice;
      }
      if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
      }
      return { ...state, total: state.total - price };
    case 'REMOVE_ITEM_FROM_CART':
      index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (state.cart[index].salePrice) {
        price = state.cart[index].salePrice;
      } else {
        price = state.cart[index].regularPrice;
      }
      let newTotal = state.total - state.cart[index].quantity * price;
      state.cart.splice(index, 1);
      return {
        ...state,
        total: newTotal,
      };
    case 'UPDATE_CART_ITEM_QUANTITY':
      index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (state.cart[index].salePrice) {
        price = state.cart[index].salePrice;
      } else {
        price = state.cart[index].regularPrice;
      }
      let quantityDiff = action.payload.quantity - state.cart[index].quantity; // new quantity - prev quantity
      state.cart[index].quantity = parseInt(action.payload.quantity);
      return {
        ...state,
        total: state.total + quantityDiff * price,
      };
    case 'CHECKOUT':
      return initialState;
    case 'FILTER_ITEMS':
      const filteredItems = state.items.filter((item) => item[action.category] === action.option);
      return {
        ...state,
        items: filteredItems,
      };
    default:
      return state;
  }
};

const store = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export default store;