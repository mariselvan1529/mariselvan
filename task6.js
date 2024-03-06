angular.module('quizApp', [])
    .controller('quizController', function($scope) {
        $scope.quizStarted = false;
        $scope.quizCompleted = false;
        $scope.currentQuestionIndex = 0;
        $scope.score = 0;

        var questions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Rome"],
                correctAnswer: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Jupiter", "Saturn", "Uranus"],
                correctAnswer: "Mars"
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
                correctAnswer: "Leonardo da Vinci"
            }
        ];

        $scope.startQuiz = function() {
            $scope.quizStarted = true;
            $scope.loadQuestion();
        };

        $scope.loadQuestion = function() {
            $scope.currentQuestion = questions[$scope.currentQuestionIndex];
            $scope.selectedOption = null;
        };

        $scope.selectOption = function(option) {
            $scope.selectedOption = option;
        };

        $scope.nextQuestion = function() {
            if ($scope.selectedOption === $scope.currentQuestion.correctAnswer) {
                $scope.score++;
            }
            $scope.currentQuestionIndex++;
            if ($scope.currentQuestionIndex < questions.length) {
                $scope.loadQuestion();
            } else {
                $scope.quizCompleted = true;
            }
        };
    });
