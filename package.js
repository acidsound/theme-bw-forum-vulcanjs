Package.describe({
  name: 'spectrum:whitecat-vulcan'
});

Package.onUse((api) => {
  api.use([
    // vulcan core
    'vulcan:core',

    // vulcan packages
    'vulcan:posts',
    'vulcan:comments',
    'vulcan:voting',
    'vulcan:accounts',
    'vulcan:email',
    'vulcan:forms',
    'vulcan:newsletter',
    'vulcan:notifications',
    'vulcan:getting-started',
    'vulcan:categories',
    'vulcan:events',
    'vulcan:embedly',
    'vulcan:api',
    'vulcan:rss',
    'vulcan:subscribe',

    'vulcan:base-components',
    'vulcan:base-styles',
    'vulcan:email-templates',

    // others
    'stylus'
  ]);

  api.addAssets([
    // whitecat logo
    'lib/assets/imgs/whitecat.svg'
  ], ['client']);

  api.addFiles([
    'lib/stylesheets/font.css',
    'lib/stylesheets/main.styl'
  ], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
