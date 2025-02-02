'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.firebase = {
    // add firebase config here
    apiKey: 'AIzaSyBApoDSaPUu6c5Z7HqmP1YHuJLNbtOp4Ds',
    authDomain: 'clarus-frontend-technical.firebaseapp.com',
    projectId: 'clarus-frontend-technical',
    storageBucket: 'clarus-frontend-technical.firebasestorage.app',
    messagingSenderId: '586628175697',
    appId: '1:586628175697:web:9b27188c9e33d0f5962570',
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
