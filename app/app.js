// create the module and name it app
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/views/dashboard.html',
            controller  : 'mainController'
        })

        // route for the dashboard page
        .when('/dashboard', {
            templateUrl : 'app/views/dashboard.html',
            controller  : 'mainController'
        })

        // route for the news page
        .when('/news', {
            templateUrl : 'app/views/news.html',
            controller  : 'newsController'
        })

});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.default = true;
    $scope.opened = true;
    $scope.closeSidebar = function() {
        $scope.opened = false;
    }
});

app.controller('newsController', function($scope) {
    $scope.message = 'Look! I am an news page.';
});

app.controller('chartsController', function ($scope) {
    Highcharts.chart('container', {

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
});
