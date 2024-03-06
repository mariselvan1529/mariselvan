angular.module('chatApp', [])
    .controller('chatController', function($scope) {
        $scope.messages = [];
        $scope.newMessage = '';

        $scope.sendMessage = function() {
            if ($scope.newMessage) {
                $scope.messages.push({ from: 'Me', text: $scope.newMessage });
                $scope.newMessage = '';
            }
        };
    });
