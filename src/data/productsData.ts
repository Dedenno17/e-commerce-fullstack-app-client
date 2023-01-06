export interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  colors: string[];
  price: number;
  favourite: number;
}

export const productsData: Product[] = [
  {
    id: 'pr1',
    title: 'Eiffel Moulded Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/S34yYcV/pngwing-com-2.png',
    categories: ['white', 'single-seat', 'chair'],
    colors: ['white', 'red', 'yellow', 'green'],
    price: 83.5,
    favourite: 5049,
  },
  {
    id: 'pr2',
    title: 'Velvet Bordeu Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/HKxDG3r/pngwing-com-1.png',
    categories: ['green', 'single-seat', 'chair'],
    colors: ['cyan', 'red', 'blue', 'green'],
    price: 70.3,
    favourite: 2169,
  },
  {
    id: 'pr3',
    title: 'Shaffeil Lumina Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/HP28dbt/pngwing-com.png',
    categories: ['gray', 'single-seat', 'chair'],
    colors: ['gray', 'white', 'blue', 'magenta'],
    price: 93.3,
    favourite: 1603,
  },
  {
    id: 'pr4',
    title: 'Egg Fritz Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/t46GxwY/kisspng-ant-chair-egg-fritz-hansen-eames-lounge-chair-5bed7df4122d58-2481938115422909320745.png',
    categories: ['red', 'single-seat', 'chair'],
    colors: ['red', 'white', 'green', 'gray'],
    price: 99.0,
    favourite: 1739,
  },
  {
    id: 'pr5',
    title: 'Argento Logan Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/vJFwr2s/kisspng-eames-lounge-chair-egg-wing-chair-model-31-7-chair-5d075591542347-0461688115607617453446.png',
    categories: ['blue', 'single-seat', 'chair'],
    colors: ['blue', 'cyan', 'red', 'gray'],
    price: 84.2,
    favourite: 2615,
  },
  {
    id: 'pr6',
    title: 'Imola Armenlight Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/DgHdrdH/kisspng-eames-lounge-chair-table-dining-room-mid-century-m-set-of-eight-ampquotleggeraampquot-dining.png',
    categories: ['gray', 'single-seat', 'chair'],
    colors: ['gray', 'blue', 'red', 'white'],
    price: 71.2,
    favourite: 2528,
  },
  {
    id: 'pr7',
    title: 'George Nakashima Chair',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/m8Nry5v/kisspng-foot-rests-eames-lounge-chair-table-chaise-longue-world-class-rare-george-nakashima-for-widd.png',
    categories: ['green', 'single-seat', 'chair'],
    colors: ['green', 'white', 'magenta', 'cyan'],
    price: 61.4,
    favourite: 3318,
  },
  {
    id: 'pr8',
    title: 'Ellijah Potten',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/hH6xWJV/kisspng-chair-ottiu-beyond-upholstery-furniture-mid-cent-loren-mid-century-modern-armchair-by-ottiu.png',
    categories: ['green', 'single-seat', 'chair'],
    colors: ['green', 'yellow', 'black', 'magenta'],
    price: 55.9,
    favourite: 3458,
  },
  {
    id: 'pr9',
    title: 'Baymon Newbury',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/r3QwZkD/Nice-Png-red-chair-png-3173559.png',
    categories: ['red', 'single-seat', 'chair'],
    colors: ['red', 'yellow', 'white', 'gray'],
    price: 59.2,
    favourite: 5458,
  },
  {
    id: 'pr10',
    title: 'Ava Navodesk',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/qphjKM6/Nice-Png-plastic-chair-png-2597143.png',
    categories: ['yellow', 'single-seat', 'chair'],
    colors: ['yellow', 'white', 'blue', 'green'],
    price: 87.0,
    favourite: 2516,
  },
  {
    id: 'pr11',
    title: 'Modway Backrest',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/kQdLccG/Nice-Png-modern-chair-png-2764779.png',
    categories: ['black', 'single-seat', 'chair'],
    colors: ['black', 'gray', 'white', 'cyan'],
    price: 71.3,
    favourite: 1412,
  },
  {
    id: 'pr12',
    title: 'Phoebe Gramercy',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/JjYPJCQ/kisspng-eames-lounge-chair-table-charles-and-ray-eames-chair-5ad2f90b0af8f8-490708481523775755045.png',
    categories: ['white', 'single-seat', 'chair'],
    colors: ['white', 'green', 'blue', 'black'],
    price: 64.9,
    favourite: 4217,
  },
  {
    id: 'pr13',
    title: 'Chaise Luxury',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/jyNK72M/kisspng-electric-blue-purple-cobalt-blue-blue-seat-5ab06b6fc59dd1-6659077615215112798095.png',
    categories: ['blue', 'single-seat', 'chair'],
    colors: ['blue', 'green', 'red', 'gray'],
    price: 40.6,
    favourite: 1987,
  },
  {
    id: 'pr14',
    title: 'Mahmayi Casali',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/W6XcTG2/kisspng-eames-lounge-chair-table-furniture-armchair-child-5a74d447a16048-224092981517605959661.png',
    categories: ['gray', 'single-seat', 'chair'],
    colors: ['gray', 'blue', 'yellow', 'black'],
    price: 84.1,
    favourite: 3922,
  },
  {
    id: 'pr15',
    title: 'Sherpa Raena',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/H20pfns/kisspng-couch-mid-century-modern-table-sofa-bed-furniture-a-sofa-5a7d4a01c667b5-21143608151816038581.png',
    categories: ['yellow', 'double-seat', 'couch'],
    colors: ['yellow', 'black', 'cyan', 'purple'],
    price: 101.2,
    favourite: 4190,
  },
  {
    id: 'pr16',
    title: 'Isabel Roo',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/sW88WKN/kisspng-eames-lounge-chair-living-room-chaise-longue-furni-5b317052df3b42-8378573315299666749144-1.png',
    categories: ['green', 'single-seat', 'chair'],
    colors: ['green', 'magenta', 'white', 'gray'],
    price: 78.8,
    favourite: 3812,
  },
  {
    id: 'pr17',
    title: 'Gilmere Gran',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/L0pYjH7/Png-Item-30781.png',
    categories: ['gray', 'single-seat', 'chair'],
    colors: ['gray', 'purple', 'blue', 'white'],
    price: 65.1,
    favourite: 5101,
  },
  {
    id: 'pr18',
    title: 'Eames Sandar',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/fFLCZc1/Png-Item-1748410.png',
    categories: ['blue', 'single-seat', 'chair'],
    colors: ['blue', 'red', 'black', 'cyan'],
    price: 79.6,
    favourite: 4296,
  },
  {
    id: 'pr19',
    title: 'Eton Antrasit',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/rsDghY1/Png-Item-6136106.png',
    categories: ['black', 'single-seat', 'chair'],
    colors: ['black', 'green', 'purple', 'white'],
    price: 63.1,
    favourite: 3073,
  },
  {
    id: 'pr20',
    title: 'Ayana Attic',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/WP3wdC4/Png-Item-2843494.png',
    categories: ['blue', 'single-seat', 'chair'],
    colors: ['blue', 'purple', 'yellow', 'magenta'],
    price: 72.9,
    favourite: 2641,
  },
  {
    id: 'pr21',
    title: 'Carleton Warren',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/cQBq0pf/Png-Item-5098668.png',
    categories: ['black', 'single-seat', 'chair'],
    colors: ['black', 'gray', 'blue', 'green'],
    price: 97.0,
    favourite: 3799,
  },
  {
    id: 'pr22',
    title: 'Lucy Payque',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/qdNcngT/Png-Item-5098371.png',
    categories: ['gray', 'single-seat', 'chair'],
    colors: ['gray', 'white', 'red', 'green'],
    price: 82.5,
    favourite: 4829,
  },
  {
    id: 'pr23',
    title: 'Malinda Lasta',
    description:
      'Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    img: 'https://i.ibb.co/pzbVq1k/Png-Item-3542692.png',
    categories: ['white', 'single-seat', 'chair'],
    colors: ['white', 'magenta', 'red', 'cyan'],
    price: 73.5,
    favourite: 2011,
  },
];
