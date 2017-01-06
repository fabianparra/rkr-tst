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

app.factory('mainInfo', function($http) {

    var obj = {content:null};

    $http.get('/app/data/activity-data.json').success(function(data) {
        // you can do some processing here
        console.log('object returned');
        obj.content = data;
    });

    return obj;
});

app.controller('chartsController', ['$scope', 'mainInfo', function ($scope, mainInfo) {
    Highcharts.chart('container', {
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Zona 1',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Zona 2',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Zona 3',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Zona 4',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
            name: 'Zona 5',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
    $scope.info = mainInfo;
    console.log($scope.info);
}]);
