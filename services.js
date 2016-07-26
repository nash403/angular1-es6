import angular from 'angular';
import TaskServerService from './task-server.service';

var module = angular.module('app.services', [])
  .service('TaskServerService', TaskServerService);

export default module;