import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';
// import tourImg5 from './images/tour-5.jpeg';
// import tourImg6 from './images/tour-6.jpeg';
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#servieces', text: 'servieces' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Asperiores, officia.',
    title: 'saving money',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Asperiores, officia.',
    title: 'endless hiking',
  },
  {
    id: 3,
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit,Asperiores, officia.',
    title: 'fas fa-socks fa-fw',
  },
];

export const tours = [
  {
    id: 1,
    title: 'Tibet Adventure',
    date: 'august 26th, 2020',
    text: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    duration: '6 days',
    price: 'from $2100',
    country: 'china',
    img: tourImg1,
  },
  {
    id: 2,
    title: 'best of java',
    date: 'october 1th, 2020',
    text: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    duration: '11 days',
    price: 'from $1400',
    country: 'indonesia',
    img: tourImg2,
  },
  {
    id: 3,
    title: 'explore hong kong',
    date: 'eptember 15th, 2020',
    text: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    duration: '8 days',
    price: 'from $5000',
    country: 'hong kong',
    img: tourImg3,
  },
  {
    id: 4,
    title: 'kenya highlights',
    date: 'december 5th, 2019',
    text: '      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    duration: '20 days',
    price: 'from $3300',
    country: 'kenya',
    img: tourImg4,
  },
];
