const meta = {
  // Metadata
  siteTitle: 'Elad Hirsch - Creative Web Designer',
  siteDescription:
    'Elad Hirsch - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Elad Hirsch',
  siteShortName: 'Elad Hirsch',
  siteUrl: 'https://eladh.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'eladh',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
