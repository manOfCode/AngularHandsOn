import registerDirectives from './directives';

const angular = require('angular');
const ngModule = angular.module('app', []);
console.log(ngModule);
registerDirectives(ngModule);