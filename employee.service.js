employeeService.$inject=['$http']
function employeeService($http){

    this.getEmployeeList=function()
    {
        return $http.get('http://localhost:3877/api/employee');
    }
}