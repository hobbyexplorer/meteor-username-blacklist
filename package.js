Package.describe({
  name: 'mageshkhanna:meteor-username-blacklist',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Blacklist usernames you dont want your users to sign up with.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/magevadi/meteor-username-blacklist',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.5.1');
  api.use('ecmascript');
  api.mainModule('meteor-username-blacklist.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mageshkhanna:meteor-username-blacklist');
  api.mainModule('meteor-username-blacklist-tests.js');
});
