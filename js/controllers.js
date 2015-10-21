//Initialize the angularJS controllers
var appControllers = angular.module('appControllers', ['appServices']);

/* Create the controllers for projectApp */

//Controller for home
appControllers.controller('homeController', ['$scope', 'goodReads', function($scope, goodReads)
{
    //Set initial signed_in status = false
    $scope.signed_in = true;

    //test api call
    goodReads.book_by_id("xQxhQgAACAAJ")
    .then(function(result)
    {
        //console.log(result[0].volumeInfo);
        $scope.book = result;
        console.log($scope.book);
    });
    
    goodReads.book_by_name("Harry Potter")
    .then(function(result)
    {
        $scope.books = result;
        console.log($scope.books);
    });

    $scope.searchBooks = function()
    {
        goodReads.book_by_name($scope.search)
        .then(function(result)
        {
            $scope.results = result;
        });
    };
}]);