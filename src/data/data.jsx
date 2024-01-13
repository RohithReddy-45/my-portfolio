import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    name: 'Feastly',
    description: 'Feastly is a responsive restaurant website landing page.',
    image: '/assets/Feastly.jpg',
    githubLink: 'https://github.com/RohithReddy-45/Feaslty',
    liveSite: 'https://feastly-rohith.netlify.app/',
    tags: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 2,
    name: 'Spotify Clone',
    description:
      'An upgraded Spotify clone! Easily upload songs, make secure payments via Stripe, and enjoy a polished design powered by Tailwind.',
    image: '/assets/spotifyClone.jpg',
    githubLink: 'https://github.com/RohithReddy-45/spotify-clone',
    liveSite: 'https://spotifyclone-next13.vercel.app/',
    tags: [
      'Next.js 13',
      'Typescript',
      'Tailwind CSS',
      'Zustand',
      'Supabase',
      'Stripe',
    ],
  },
  {
    id: 3,
    name: 'Recipe Hunt',
    description:
      'Recipehunt is a web app for finding recipes, providing ingredients and quantities for each item.',
    image: '/assets/RecipeHunt.jpg',
    githubLink: 'https://github.com/RohithReddy-45/RecipeHunt',
    liveSite: 'https://recipehunt-rohith.netlify.app/',
    tags: ['HTML', 'Tailwind CSS', 'Javascript'],
  },
];

export const links = [
  {
    id: 1,
    link: 'Home',
  },
  {
    id: 2,
    link: 'About',
  },
  {
    id: 3,
    link: 'Projects',
  },
  {
    id: 4,
    link: 'Contact',
  },
];

export const socialLinks = [
  {
    name: 'Github',
    link: 'https://github.com/RohithReddy-45',
    icon: <FaGithub size={24} />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/rohith-reddy45',
    icon: <FaLinkedin size={24} />,
  },
];
