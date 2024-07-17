const meta = {
  // Metadata
  siteTitle: 'Elad Hirsch - Tech Lead',
  siteDescription:
    'Elad Hirsch - Tech Lead',
  siteTitleAlt: 'Elad Hirsch',
  siteShortName: 'Elad Hirsch',
  siteUrl: 'https://eladh.github.io/personal-website', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'elad',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
