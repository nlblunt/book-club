//Initialize the angularJS controllers
var appControllers = angular.module('appControllers', ['appServices']);

/* Create the controllers for projectApp */

//Controller for home
appControllers.controller('homeController', ['$scope', 'googleBooks', 'bcs', '$cookies', function($scope, googleBooks, bcs, $cookies)
{
    //Set initial signed_in status = false
    $scope.signed_in = false;
    //$scope.signed_in = true;
    
    bcs.status_check();

    //Check to see if user is signed in
    //ONLY ON RAILS SERVER
    //bcs.user_check()
    //.then(function(result)
    //    {

    //    $scope.signed_in = true;
                
    //});

        
    //test api call
    googleBooks.book_by_id("xQxhQgAACAAJ")
    .then(function(result)
    {
        //console.log(result[0].volumeInfo);
        $scope.book = result;
        console.log($scope.book);
    });
    
    googleBooks.book_by_name("Harry Potter")
    .then(function(result)
    {
        $scope.books = result;
        console.log($scope.books);
    });

    //Sign In
    $scope.sign_in = function()
    {
        bcs.sign_in_user($scope.user.name, $scope.user.password)
        .then(function(result)
        {
            $scope.signed_in = true;
            $scope.user = result;
            console.log($scope.user);
        },
        function(result)
        {
           $scope.error = result; 
        });
    };
    
    $scope.searchBooks = function()
    {
        googleBooks.book_by_name($scope.search)
        .then(function(result)
        {
            $scope.results = result;
        });
    };
    
    $scope.searchShowRead = function()
    {
        $scope.search_show_read = true;
    };
    
    $scope.cancelSearchShowRead = function()
    {
        $scope.search_show_read = false;
    };
}]);