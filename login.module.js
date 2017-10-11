import loginController from "./login.controller";
import loginService from "./login.service"

angular.module("LoginModule", [])
    .controller("LoginController", loginController)
    .service("LoginService", loginService);