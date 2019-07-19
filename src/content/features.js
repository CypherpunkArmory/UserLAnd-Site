import openSourceIcon from '../images/open-source-icon.svg';
import protectionIcon from '../images/protection-icon.svg';
import usabilityIcon from '../images/usability-icon.svg';

export default {
  pageTitle: 'Features',
  pageSubtitle:
    'Everything you need to share your local servers with the world.',
  features: [
    {
      title: 'FOSS',
      description: 'Open source both on the client and the server.',
      icon: openSourceIcon,
    },
    {
      title: 'Secure',
      description:
        'Multiple architectural and implementation details that guard your use of our service.',
      icon: protectionIcon,
    },
    {
      title: 'Easy',
      description:
        'The entire service is intuitive to use and does what it is supposed to do.',
      icon: usabilityIcon,
    },
  ],
}
