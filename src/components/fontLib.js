import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';

import {
  faGithub,
  faDribbble,
  faTwitter,
  faFacebook,
  faReddit,
  faJs,
  faHtml5,
  faStackOverflow,
  faLinkedin,
  faDev,
  faCss3,
  faCodepen,
  faReact,
  faNode,
  faAws
} from '@fortawesome/free-brands-svg-icons';
import {
  faPaintBrush,
  faCode,
  faWindowMaximize,
  faHandshake,
  faPaperPlane,
  faChevronRight,
  faChevronLeft,
  faClock,
  faCalendarAlt,
  faBars,
  faDatabase,
  faChalkboardTeacher,
  faTimes,
  faMoon,
  faSun,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

const llmIcon = {
  prefix: 'fac', // Custom prefix
  iconName: 'llm-icon',
  icon: [
    24, // width
    24, // height
    [], // ligatures
    null, // unicode
    "M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zM6.666 3.158a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM12 22.667a10.67 10.67 0 0 1-10.667-10.67C1.333 6.172 6.172 1.333 12 1.333s10.667 4.839 10.667 10.667c0 5.828-4.839 10.667-10.667 10.667zM17.334 16a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM4.666 14.666a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM16.666 7.333a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM6 9.999a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM12 10.666a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM12 14.666a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0zM8.666 12.666a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 1 1-2.666 0z" // SVG path data
  ]
};


library.add(
  faAws,
  faStackOverflow,
  faLinkedin,
  faDev,
  faGithub,
  faChalkboardTeacher,
  faDribbble,
  faTwitter,
  faFacebook,
  faReddit,
  faPaintBrush,
  faWindowMaximize,
  faCode,
  faJs,
  faHandshake,
  faPaperPlane,
  faHtml5,
  faCss3,
  faCodepen,
  faChevronRight,
  faChevronLeft,
  faClock,
  faCalendarAlt,
  faReact,
  faNode,
  faBars,
  faDatabase,
  faTimes,
  faMoon,
  faSun,
  faEdit,
  llmIcon
);
config.autoAddCss = false;
