Package.describe({
  name: 'spectrum:whitecat-vulcan'
});

Package.onUse((api) => {
  api.use([
    // vulcan core
    'vulcan:core@1.6.0',

    // vulcan packages
    'vulcan:posts@1.6.0',
    'vulcan:comments@1.6.0',
    'vulcan:voting@1.6.0',
    'vulcan:accounts@1.6.0',
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

  // api.addAssets([
  // ], ['client']);

  api.addFiles([
    'lib/stylesheets/font.css',
    'lib/stylesheets/main.styl'
  ], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
