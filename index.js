var app = angular.module("myAngular", ['ngRoute']);
app.service("loginService", loginService);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/login.html",
            controller: loginController,
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
});
