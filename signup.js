
//75368f8a48


//newdistrict.us3.list-manage.com/subscribe/post?u=a435cca37d981c2f49a8a7d20&amp;id=75368f8a48&amp;double_optin=false"

NDT.controller('signup', function($scope, $http){

    $scope.greeting = 'hi';

    $scope.message = '';

    $scope.signupVisible = false;

    $scope.person = {
        name:'',
        email:'',
        winery:''
    }

    var formOK = false;

    $scope.accept = function(person, signup) {


        if (!person.name) {
            formOK = false;
            $scope.message = 'please enter your name';

        } else if(!person.email || signup.EMAIL.$invalid) {
            formOK = false;
            $scope.message = 'please enter a valid email';

        } else if (!person.winery) {
            formOK = false;
            $scope.message = 'please enter your winery name';
        } else {
            formOK = true;
            $scope.message = 'great job!';

        }


    };
//ng-disabled="MailchimpSubscriptionForm.$invalid"

    $scope.sendToMailchimp = function(mailchimp){
        if(formOK){
            console.log(mailchimp);
//            addSubscription(mailchimp);


//            analytics.identify(person);
/*
            var url = 'https://us3.api.mailchimp.com/2.0/lists/subscribe';

            tData = "conversationid=1c34b4f2&userid=67e80bf6&content='Hello champs! - Web App'";



            var data = {
                apikey:'bc9d280f58728e2695c1fcf286556797-us3',
                id:'75368f8a48',
                email:{email:person.email},
                merge_vars:{
                    name:person.name,
                    winery:person.winery
                },
                double_optin:false,
                update_existing:true
            };

            var datastring = "apikey=dd021e2e20ce88b294d7da081259eafc-us3"+
                    "&id=75368f8a48"+
                    "&email=test@test.com";
            $http.post(url,datastring)
                .then(function(result) {
                    $scope.message = 'sign up successful. thanks!';
                })
                .catch(function(result){
                    console.log(result);
                });
            */

        }
    }

});