import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    target: '_blank',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    target: '_blank',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.`,
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.`,
  },
  {
    id: 1,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.`,
  },
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    days: '6 days',
    cost: 'from $2100',
  },
  {
    id: 2,
    image: tourImg2,
    date: 'october 1st, 2020',
    title: 'Best of Java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    days: '11 days',
    cost: 'from $1400',
  },
  {
    id: 3,
    image: tourImg3,
    date: 'september 15th, 2020',
    title: 'Explore Hong Kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Hong Kong',
    days: '8 days',
    cost: 'from $5000',
  },
  {
    id: 4,
    image: tourImg4,
    date: 'december 5th, 2019',
    title: 'Kenya Highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    days: '20 days',
    cost: 'from $3300',
  },
];

export const footerLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#featured', text: 'featured' },
];
