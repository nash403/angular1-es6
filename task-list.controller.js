export default class TaskListController {
  constructor($scope) {
    $scope.tasks = [
      'get a pie',
      'call mom',
      'play Pokémon GO'
    ];
  }
}

TaskListController.$inject = ['$scope'];