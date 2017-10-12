loginService.$inject = ['$location'];
function loginService($location) {
    this.login = function (userName, password, x) {

        // if (userName == "Aneesh" && password == "123") {
        //     $location.path("listemployee");
        // }
        // else {
        //     $location.path("/");
        // }
        x();
    }
}
