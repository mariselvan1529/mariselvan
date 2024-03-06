angular.module('eventCalendarApp', [])
.controller('CalendarController', function() {
    var self = this;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    self.currentDate = new Date();
    self.currentMonth = months[self.currentDate.getMonth()];
    self.currentYear = self.currentDate.getFullYear();
    
    self.days = [];

    self.generateCalendar = function() {
        self.days = [];

        var firstDay = new Date(self.currentYear, self.currentDate.getMonth(), 1).getDay();
        var numDays = daysInMonth[self.currentDate.getMonth()];

        for (var i = 0; i < firstDay; i++) {
            self.days.push('');
        }

        for (var i = 1; i <= numDays; i++) {
            self.days.push(i);
        }
    };

    self.prevMonth = function() {
        if (self.currentDate.getMonth() === 0) {
            self.currentDate.setFullYear(self.currentYear - 1);
            self.currentDate.setMonth(11);
        } else {
            self.currentDate.setMonth(self.currentDate.getMonth() - 1);
        }
        self.currentMonth = months[self.currentDate.getMonth()];
        self.currentYear = self.currentDate.getFullYear();
        self.generateCalendar();
    };

    self.nextMonth = function() {
        if (self.currentDate.getMonth() === 11) {
            self.currentDate.setFullYear(self.currentYear + 1);
            self.currentDate.setMonth(0);
        } else {
            self.currentDate.setMonth(self.currentDate.getMonth() + 1);
        }
        self.currentMonth = months[self.currentDate.getMonth()];
        self.currentYear = self.currentDate.getFullYear();
        self.generateCalendar();
    };

    self.generateCalendar();
});
