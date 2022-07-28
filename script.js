var app = angular.module("myApplication", []);
app.controller("myController", function ($scope) {
  $scope.tasks = [];
  $scope.save = function () {
    $scope.tasks.push({ task_title: $scope.task_name, status: 0 });
  };
  $scope.remove = function (i) {
    $scope.tasks.splice(i, 1);
  };
  $scope.progress = function (i) {
    $scope.tasks[i].status = 1;
  };
  $scope.finished = function (i) {
    $scope.tasks[i].status = 2;
  };
});

/* var app = angular.module("myApplication", []);
        app.controller("myController", function ($scope) {
          $scope.tasks = [
            { task_title: "task 1", status: true },
            { task_title: "task 2", status: false },
            { task_title: "task 3", status: false },
          ];
        });*/
