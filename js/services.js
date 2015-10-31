//Initialize the angularJS services
var appServices = angular.module('appServices', ['ngResource']);

appServices.service('bcs', function($http, $q)
{
    //Get server status
    this.status_check = function()
    {
        var defer = $q.defer();
        
        //$http.get('https://bcs.rubywebs.net/status_check')
        $http.get('https://bcs-nlblunt.c9.io/status_check')
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
    
    //Check to see if user is signed in
    this.user_check = function()
    {
        var defer = $q.defer();
        
        $http.get('https://bcs-nlblunt.c9.io/user_check', {withCredentials: true})
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
    
    //Create a new user
    this.create_user = function()
    {
        
    };
    
    //Attempt to sign in the user
    this.sign_in_user = function(uname, pword)
    {
        var defer = $q.defer();
        
        //$http.post('https://bcs.rubywebs.net/users/sign_in', {username: uname, password: pword, password_confirmation: pword})
        $http(
            {
                method: 'POST',
                url: 'https://bcs-nlblunt.c9.io/users/sign_in', 
                params: {username: uname, password: pword},
            })
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