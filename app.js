(function(){

angular.module("LunchCheck",[])
       .controller("LunchCheckController",LunchCheckFun);
LunchCheckFun.$inject=["$scope"];
function LunchCheckFun($scope){
$scope.dishes="";
$scope.error_msg="";

$scope.check_dishes=function(){
var stringInputDishes = $scope.dishes;
var stringInputSplitArray = stringInputDishes.split(",");
var stringInput = stringInputSplitArray.length;
if(stringInputDishes===""){
  $scope.error_msg="Please enter data first";
}
else if (stringInput<4) {
  $scope.error_msg="Enjoy!";
}
else if (stringInput>3) {
  $scope.error_msg="Too much!"
}
          console.log(stringInput);
           };
};


}
)();
