angular.module('taskManagerApp', [])
.controller('TaskController', function() {
    var self = this;
    self.tasks = [];
    self.newTask = '';

    self.addTask = function() {
        if (self.newTask.trim() !== '') {
            self.tasks.push(self.newTask.trim());
            self.newTask = '';
        }
    };

    self.editTask = function(index) {
        var editedTask = prompt('Edit task:', self.tasks[index]);
        if (editedTask !== null) {
            self.tasks[index] = editedTask.trim();
        }
    };

    self.deleteTask = function(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            self.tasks.splice(index, 1);
        }
    };
});
