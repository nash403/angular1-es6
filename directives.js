import angular from 'angular';
import LoggableDirective from './loggable.directive';

var module = angular.module('app.directives', [])
  .directive('loggable', () => new LoggableDirective());

export default module;