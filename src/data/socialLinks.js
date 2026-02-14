import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Bio } from './constants';

export const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: Bio.github,
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: Bio.linkedin,
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: Bio.twitter,
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: Bio.insta,
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:sunny@example.com',
  },
];
