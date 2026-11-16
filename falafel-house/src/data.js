import heroImg from './assets/hero.svg'
import wrapImg from './assets/p3.jpg'
import bowlImg from './assets/p2.jpg'
import juiceImg from './assets/p1.jpg'
import burgerImg from './assets/P4.jpg'

export const images = { heroImg, wrapImg, bowlImg, juiceImg, burgerImg }

// Swap these for the real store links
export const links = {
  order: 'https://www.ubereats.com',
  uberEats: 'https://www.ubereats.com',
  boltFood: 'https://food.bolt.eu',
  instagram: 'https://www.instagram.com/falafelhouseke',
  phone: '+254 708 102 111',
  phoneHref: 'tel:+254708102111',
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Pamoja', href: '#pamoja' },
  { label: 'Contact', href: '#contact' },
]

export const ticker = [
  'Falafel wraps',
  'Plant burgers',
  'Masala fries',
  'Buddha bowls',
  'Cold-pressed juices',
  'Smoothies',
]

export const polaroids = [
  {
    bg: 'bg-checker',
    img: wrapImg,
    alt: 'Falafel wrap in Falafel House paper',
    sign: 'FALAFEL\nBRINGS\nPEOPLE\nTOGETHER ♥',
    caption: 'first bite, best bite',
  },
  {
    bg: 'bg-sun',
    img: bowlImg,
    alt: 'Buddha bowl with falafel, greens and tahini',
    sign: 'LUNCH\nFOR A\nCAUSE ♥',
    caption: 'pamoja lunch crew',
  },
  {
    bg: 'bg-fh',
    img: burgerImg,
    alt: 'Crispy plant-based burger',
    sign: '100%\nPLANT\nPOWER',
    caption: 'extra tahini pls',
  },
]

export const receiptLines = [
  { qty: '1x', label: 'CRISPY FALAFEL' },
  { qty: '1x', label: 'FRESH HUMMUS' },
  { qty: '1x', label: 'PEOPLE YOU LOVE' },
]

export const bestsellers = [
  { name: 'Falafel Wrap', price: 'KES 1,200', img: wrapImg, alt: 'Falafel wrap', tag: '#1' },
  { name: 'Buddha Bowl', price: 'KES 800', img: bowlImg, alt: 'Buddha bowl' },
  { name: 'Cold-Pressed Juice', price: 'From KES 450', img: juiceImg, alt: 'Cold-pressed green juice' },
  { name: 'Kama Kuku Burger', price: 'KES 1,100', img: burgerImg, alt: 'Kama Kuku plant burger', tag: 'HOT' },
]

export const branches = [
  ['Sarit Centre, 2nd floor food court', 'Karuna Rd, Westlands'],
  ['Village Market food court', 'Limuru Rd, Gigiri'],
]

export const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our story', href: '#story' },
  { label: 'Pamoja', href: '#pamoja' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'Instagram', href: links.instagram },
  { label: 'Uber Eats', href: links.uberEats },
  { label: 'Bolt Food', href: links.boltFood },
]

export const companyLinks = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
]
