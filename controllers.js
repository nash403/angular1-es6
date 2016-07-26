import angular from 'angular';
import TaskListController from './task-list.controller';

var module = angular.module('app.controllers', [])
  .controller('TaskListController', TaskListController);

export default module;