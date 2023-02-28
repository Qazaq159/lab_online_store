export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  like_count: number;
}

export interface Category {
  name: string;
  productItems: [Product];
}

export const objects = [
  {
    id: 1,
    name: 'Игровая приставка Xbox Series S белый',
    price: 164118,
    description: 'консоль Xbox Series S предлагает безграничные возможности для развлечений сразу после ее извлечения из коробки.',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h2e/33118957240350/xbox-series-s-belyj-100793537-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/',
    like_count: 0
  },
  {
    id: 2,
    name: 'Игровая приставка Sony PlayStation 5 белый',
    price: 330000,
    description: 'Создавайте захватывающие игровые моменты и делитесь ими Заснимите свой игровой процесс и поделитесь им с другими игроками в PlayStation Network или в приложениях социальных сетей.',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h61/49348562649118/sony-playstation-5-belyj-100746577-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577',
    like_count: 0
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 3728493,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404',
    like_count: 0
  },
  {
    id: 4,
    name: 'Игровая приставка Sony PlayStation 5 белый',
    price: 330000,
    description: 'Создавайте захватывающие игровые моменты и делитесь ими Заснимите свой игровой процесс и поделитесь им с другими игроками в PlayStation Network или в приложениях социальных сетей.',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h61/49348562649118/sony-playstation-5-belyj-100746577-1-Container.jpg',
    link: '',
    like_count: 0
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 90323,
    description: 'Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда. Наслаждайтесь живым четким изображением с технологией FHD+',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279',
    like_count: 0
  },
  {
    id: 6,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 1238421,
    description: 'Отличный смартфон! Отличная камера, мощная батарея',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/',
    like_count: 0
  },
  {
    id: 7,
    name: 'Смартфон Huawei nova 10 SE 8 ГБ/128 ГБ зеленый',
    price: 189890,
    description: 'Зарядка прям сумасшедшая. Заряжается как молния быстро, заряд держится очень долго, Инстаграм, Ватсап все есть',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h5c/64494466269214/huawei-nova-10-se-8-gb-128-gb-zelenyi-podarok-huawei-y5p-i-selfie-stick-pro-107221521-1.jpg',
    link: 'https://kaspi.kz/shop/p/huawei-nova-10-se-8-gb-128-gb-zelenyi-107221521',
    like_count: 0
  },
  {
    id: 8,
    name: 'Дрон DJI Mini 2 Fly More Combo серый',
    price: 679990,
    description: 'Дрон DJI Mini 2 Fly More Combo - это компактный квадрокоптер, представленный в полной комплектации. В дополнение к базовому оснащению в комплект поставки включены 2 пропеллера, 2 батареи, держатель для пропеллеров, зарядный концентратор, адаптер питания, сумка для переноски.',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h11/33002546593822/dji-mini-2-fly-more-combo-seryj-100789420-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/dji-mini-2-fly-more-combo-seryi-100789420',
    like_count: 0
  },
  {
    id: 9,
    name: 'Ноутбук ASUS ROG Strix G15 G513',
    price: 594990,
    description: 'ROG Strix G15/17 – это игровая платформа для массового пользователя. Благодаря мощной конфигурации, которая может включать в себя процессор AMD Ryzen 7 4800H и видеокарту NVIDIA GeForce GTX 1650',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h47/46431328141342/asus-rog-strix-g15-g513ie-hn004-90nr0582-m01010-cernyj-102527694-1.jpg',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-g513ie-hn004-90nr0582-m01010-chernyi-102527694',
    like_count: 0
  },
  {
    id: 10,
    name: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    price: 994590,
    description: 'Превосходный дисплей Liquid Retina XDR с диагональю 14.2 дюйма и большой набор портов станут дополнительными преимуществами. Чип Apple M1 Pro это грандиозное расширение вычислительных и графических возможностей компьютера, ускорение операций машинного обучения',
    imageUrl: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h93/47153374134302/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247',
    like_count: 0
  }
];

export const Categories = [
  {
    name: "Household appliances",
    productItems: [
        objects[0],
        objects[2],
        objects[4],
        objects[6],
        objects[8]
    ]
  },
  {
    name: "Smartphones",
    productItems: [
      objects[1],
      objects[3],
      objects[5],
      objects[7],
      objects[9]
    ]
  },
  {
    name: "Laptops",
    productItems: [
      objects[1],
      objects[2],
      objects[3],
      objects[4],
      objects[5]
    ]
  },
  {
    name: "Gaming",
    productItems: [
      objects[1],
      objects[3],
      objects[5],
      objects[7],
      objects[9]
    ]
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
