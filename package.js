Package.describe({
  name: 'muqube:autoform-selectable',
  version: '0.0.1',
  summary: 'Single and multiple selection widget for autoform',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('ecmascript');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');

  api.addFiles([
    'autoform-selectable.html',
    'autoform-selectable.js',
    'autoform-selectable.css',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('autoform-selectable');
  api.mainModule('meteor-autoform-selectable-tests.js');
});
