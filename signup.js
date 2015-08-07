
//75368f8a48

NDT.controller('signup', function($scope){

    $scope.greeting = 'hi';

    $scope.message = '';

    $scope.signupVisible = false;

    $scope.accept = function(email) {


        if (!$scope.name) {
            $scope.message = 'please enter your name';

        } else if(!$scope.email || $scope.signup.EMAIL.$invalid) {
            $scope.message = 'please enter a valid email';

        } else if (!$scope.winery) {
            $scope.message = 'please enter your winery name';
        } else {
            $scope.message = 'great job!';

        }


    };



});