//Initialize the angularJS services
var appServices = angular.module('appServices', []);

appServices.service('bcs', function($http, $q)
{
    //Check to see if user is signed in
    this.user_check = function()
    {
        var defer = $q.defer();
        
        $http.get('http://bcs.rubywebs.net/user_check')
        .then(function(result)
        {
            defer.resolve(result);
        },
        function(result)
        {
            defer.reject(result);
        });
        
        return defer.promise;
    };
    
    this.create_user = function()
    {
        
    };
});

appServices.service('googleBooks', function($http, $q)
{
    this.book_by_name = function(book_name)
    {
        var defer = $q.defer();
        
        console.log(book_name);
         $http.get('https://www.googleapis.com/books/v1/volumes'
            ,
            {params:{q: book_name}})
             .then
             (function(result)
             {
                 defer.resolve(result.data.items);
             },
             function(result)
             {
                 console.log(result);  
             });
             
             return defer.promise;
    };
    
    this.book_by_id = function(book_id)
    {
        var defer = $q.defer();
        
         $http.get('https://www.googleapis.com/books/v1/volumes'
            ,
            {params:{q: book_id}})
             .then
             (function(result)
             {
                 console.log(result.data.items[0]);
                 defer.resolve(result.data.items[0]);
             }),
             function(result)
             {
                 console.log(result);  
             };
             
             return defer.promise;
    };
});