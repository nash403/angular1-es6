import angular from 'angular';
import TaskListController from './task-list.controller.js';

var module = angular.module('app.controllers', [])
  .controller('TaskListController', TaskListController);

export default module;