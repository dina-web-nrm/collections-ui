/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dw-collections-manager',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    i18n: {
        defaultLocale: 'sv'
    },
    EmberENV: {
    FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
    }
    },

    APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
    },
    moment: {
        // To cherry-pick specific locale support into your application.
        // Full list of locales: https://github.com/moment/moment/tree/2.10.3/locale
        includeLocales: ['sv', 'en']
    },
    metricsAdapters: [{
            name: 'Piwik',
            environments: ['production'],
            config: {
                piwikUrl: 'https://monitor.dina-web.net',
                siteId: 4
            }
        }, {
            name: 'Piwik',
            environments: ['development'],
            config: {
                piwikUrl: 'https://monitor.dina-web.net',
                siteId: 2
            }
    }],
    'ember-composable-helpers': {
      only: ['filter-by']
    }
  };

  if (environment === 'development') {

    // Basic logging, e.g. "Transitioned into 'post'"
    ENV.LOG_TRANSITIONS = true,

    // Extremely detailed logging, highlighting every internal
    // step made while transitioning into a route, including
    // `beforeModel`, `model`, and `afterModel` hooks, and
    // information about redirects and aborted transitions
    ENV.LOG_TRANSITIONS_INTERNAL = true

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // api.dina-web is specified in the backend reposity.
    ENV.HOST = 'http://localhost';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
      ENV.SENTRY_LOGGING = true;

      // String to be replaced when running in production.
      ENV.HOST = 'REPLACEWITHHOST';
  }

  return ENV;
};
