angular.module('todoApp', [])
    .controller('todoController', function($scope) {
        $scope.tasks = [];

        $scope.addTask = function() {
            if ($scope.newTask) {
                $scope.tasks.push({ name: $scope.newTask, fadeIn: true });
                $scope.newTask = '';

                // Set a timeout to remove the fadeIn class after the animation
                setTimeout(function() {
                    $scope.$apply(function() {
                        $scope.tasks[$scope.tasks.length - 1].fadeIn = false;
                    });
                }, 500);
            }
        };

        $scope.removeTask = function(index) {
            $scope.tasks[index].fadeOut = true;

            // Set a timeout to remove the task after the animation
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.tasks.splice(index, 1);
                });
            }, 500);
        };
    });
