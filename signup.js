
//75368f8a48

NDT.controller('signup', function($scope){

    $scope.greeting = 'hi';

    $scope.message = 'message';

    $scope.accept = function(email) {


        var yearOK = ($scope.year >= 1900 ) && ($scope.year <= 2015 );

        if (yearOK && $scope.confirmed) {


            $scope.message = '';

            analytics.track('signed up to mailing list');

            $scope.subscribed = true;
            $scope.confirmationRed = false;


        } else {
            if (!$scope.name) {
                $scope.message = 'please enter your name';

            } else if(!$scope.email || $scope.signup.EMAIL.$invalid) {
                $scope.message = 'please enter a valid email';

            } else if (!$scope.winery) {
                $scope.message = 'please enter your winery name';
            } else {
                $scope.message = 'great job!';

            }

        }
    };



});