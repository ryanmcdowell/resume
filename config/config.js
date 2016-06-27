'use strict';

/**
 * The config module allows for environment properties
 * to be automatically set at runtime via the grunt replace
 * module. Properties will be read from the json files under
 * the environments directory and auto-injected into this
 * module. After injection, the module is moved to the services
 * directory for access within the application.
 */
angular.module('resume.config', []).constant('Config', {
  environment: '@@environment'
});
