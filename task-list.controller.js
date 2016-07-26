import TaskServerService from './task-server.service';

export default class TaskListController {
  constructor($scope, TaskServerService) {
    $scope.tasks = TaskServerService.getTasks();
  }
}

TaskListController.$inject = ['$scope', 'TaskServerService'];