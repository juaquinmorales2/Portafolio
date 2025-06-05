import config from '~/config.json';

export const navLinks = [
  {
    label: 'Proyectos',
    pathname: '/#project-1',
  },
  {
    label: 'Sobre mi',
    pathname: '/#details',
  },
  {
    label: 'Experiencia',
    pathname: '/articles',
  },
  {
    label: 'Contacto',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Linkedin',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
