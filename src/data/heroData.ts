export interface HeroData {
  id: string;
  title: string;
  slogan: string;
  img: string;
  desc: string;
  colorTheme: string;
}

export const heroCarrouselData: HeroData[] = [
  {
    id: Math.random() + 1 + '',
    title: 'New Furniture Collection Trends in 2023',
    slogan: 'risus ultricies tristique nulla aliquet enim ...',
    img: 'https://i.ibb.co/pLpdfh3/pink-sofa.png',
    desc: 'risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci',
    colorTheme: 'PrimaryPink',
  },
  {
    id: Math.random() + 1 + '',
    title: 'Autumn Couch Collection',
    slogan: 'risus ultricies tristique nulla aliquet enim ...',
    img: 'https://i.ibb.co/9pTNSgX/blue-sofa.png',
    desc: 'risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere',
    colorTheme: 'primaryNavyBlue',
  },
  {
    id: Math.random() + 1 + '',
    title: 'Comfortable Single Chair',
    slogan: 'risus ultricies tristique nulla aliquet enim ...',
    img: 'https://i.ibb.co/hdgXMJR/pngwing-com-3.png',
    desc: 'risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam',
    colorTheme: 'primaryPurple',
  },
];
