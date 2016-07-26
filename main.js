import angular from 'angular';
import Controllers from './controllers';
import Services from './services';
import Directives from './directives';

angular
  .module('app',[Controllers.name, Services.name, Directives.name]);