import openSourceIcon from '../images/features/open-source-icon.svg';
import protectionIcon from '../images/features/security-icon.svg';
import usabilityIcon from '../images/features/usability-icon.svg';
import cloudIcon from '../images/features/cloud-icon.svg';
import guiIcon from '../images/features/gui-icon.svg';
import locallyIcon from '../images/features/locally-icon.svg';
import terminalIcon from '../images/features/terminal-icon.svg';

export default {
  pageTitle: 'Features',
  pageSubtitle:
    'Everything you need to dive into Linux.',
  features: [
    {
      title: 'FOSS',
      description: 'Open source through and through.',
      icon: openSourceIcon,
    },
    {
      title: 'Easy',
      description:
        'The entire service is intuitive to use and does what it is supposed to do.',
      icon: usabilityIcon,
    },
    {
      title: 'Local',
      description:
        'Install and run Linux on your device.  Free and no root required.',
      icon: locallyIcon,
    },
    {
      title: 'Terminal',
      description:
        'Command line power at your fingertips.',
      icon: terminalIcon,
    },
    {
      title: 'Desktop',
      description:
        'Run a simple X session or a full blown desktop easily.',
      icon: guiIcon,
    },
  ],
}
