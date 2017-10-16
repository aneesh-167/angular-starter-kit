loginController.$inject = ['$location', '$scope', 'loginService'];

function loginController($location, $scope, loginService) {
    $scope.loginFailed = false;
    this.login = function () {
        loginService.login($scope.userName, $scope.password, this.x)
            .then(function (response) {
                if (response.data == "Success") {
                    $location.path("/listemployee")
                }
                else {
                    $scope.loginFailed = true;
                }
            });
    }
}



