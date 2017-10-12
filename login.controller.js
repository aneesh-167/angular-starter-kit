loginController.$inject = ['$scope', 'loginService'];

function loginController($scope, loginService) {
    this.login = function () {
        loginService.login($scope.userName, $scope.password, this.x);
    }
    this.x = () => {
        console.log('from x');
    }
}

