var app = angular.module("myAngular", ['ngRoute']);
app.service("loginService", loginService);
app.service("employeeService", employeeService);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/login.html",
            controller: loginController,
            controllerAs: 'loginCtrl'
        })
        .when("/addemployee", {
            templateUrl: "view/addemployee.html",
            controller: employeeController,
            controllerAs: 'empCtrl'
        })
        .when("/listemployee", {
            templateUrl: "view/listemployee.html",
            controller: employeeController,
            controllerAs: 'empCtrl'
        })
        .otherwise({ redirectTo: '/' })
});


app.component("empheader", {
    templateUrl: "header.html"
});
