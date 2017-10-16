loginService.$inject = ['$http'];
function loginService($http) {
    this.login = function (userName, password) {

        var parameter = JSON.stringify({ UserName: userName, Password: password });
        return $http.post("http://localhost:3877/api/login", parameter);            
    }
}
