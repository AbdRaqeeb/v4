module.exports = {
  siteTitle: 'Abdur-Raqeeb Ajao | Software Engineer',
  siteDescription:
    'Abdur-Raqeeb Ajao is passionate about building  beautiful and performant products with delightful user experiences.',
  siteKeywords:
    'Abdur-Raqeeb Ajao, Ajao, Abdur-Raqeeb, AbdRaqeeb, software engineer, frontend engineer, web developer, javascript, react',
  siteUrl: 'https://gkassym.netlify.com',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Abdur-Raqeeb Ajao',
  location: 'Abuja, Nigeria',
  email: 'ajaorqb@gmail.com',
  github: 'https://github.com/AbdRaqeeb',
  twitterHandle: '@Roqmania',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AbdRaqeeb',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abdraqeeb/',
    },
    // {
    //   name: 'Medium',
    //   url: 'https://medium.com/@gapur.kassym',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/gkassym',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Roqmania',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
