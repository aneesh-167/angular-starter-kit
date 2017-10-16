employeeController.$inject=['$scope','employeeService'];

function employeeController($scope, employeeService){

        $scope.employeeList=[];
        this.listEmployee=function(){
                employeeService.getEmployeeList()
                        .then(function(response){
                                $scope.employeeList=response.data;  
                        });
        }

        this.listEmployee();
}