angular.module('authApp', [])
    .controller('authController', function($scope) {
        $scope.isLoggedIn = false;
        $scope.currentUser = null;

        // Dummy users data
        var users = [
            { username: 'user1', password: 'password1' },
            { username: 'user2', password: 'password2' }
        ];

        $scope.loginData = {};
        $scope.signupData = {};

        $scope.login = function() {
            var username = $scope.loginData.username;
            var password = $scope.loginData.password;

            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                    $scope.isLoggedIn = true;
                    $scope.currentUser = users[i];
                    return;
                }
            }
            alert('Invalid username or password');
        };

        $scope.signup = function() {
            var username = $scope.signupData.username;
            var password = $scope.signupData.password;

            // Check if username already exists
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    alert('Username already exists');
                    return;
                }
            }

            // Add new user
            users.push({ username: username, password: password });
            alert('Sign up successful. Please login.');
            $scope.signupData = {};
        };

        $scope.logout = function() {
            $scope.isLoggedIn = false;
            $scope.currentUser = null;
            $scope.loginData = {};
        };
    });
