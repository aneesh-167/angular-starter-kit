
var app = angular.module("myAngular", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/login.html",
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        })
        .when("/addemployee", {
            templateUrl: "view/addemployee.html",
            //controller: addEmployeeController,
            //controllerAs: 'addEmpCtrl'
        })
        .when("/listemployee", {
            templateUrl: "view/listemployee.html",
            //controller: listEmployeeController,
            //controllerAs: 'listEmpCtrl'
        })
        .otherwise({ redirectTo: '/' })
});


app.component("empheader", {
    templateUrl: "header.html"
})

app.service("loginService", function ($location) {
    this.login = function (userName, password) {

        if (userName == "Aneesh" && password == "123") {
            $location.path("listemployee");
        }
        else {
            $location.path("/");
        }
    }
});

app.controller("loginController", function ($scope, loginService) {

    this.login = function () {
        loginService.login($scope.userName, $scope.password);
    }

});