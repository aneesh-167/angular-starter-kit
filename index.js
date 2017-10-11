
var app = angular.module("myAngular", ['ngRoute', 'loginModule']);

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

app.service("loginService", function () {
    this.login = function (userName, password) {

        if (userName == "Aneesh" && password == "123") {
            alert("success");
        }
        else {
            alert("failed");
        }
    }
});

app.controller("loginController", function ($scope, loginService) {

    this.login = function () {
        loginService.login($scope.userName, $scope.password);
    }

});