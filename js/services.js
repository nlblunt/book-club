//Initialize the angularJS services
var appServices = angular.module('appServices', ['ngResource']);

appServices.service('bcs', function($http, $q)
{
    //Get server status
    this.status_check = function()
    {
        var defer = $q.defer();
        
        $http.get('http://bcs.rubywebs.net/status_check')
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
        
        $http.get('http://bcs.rubywebs.net/user_check', {withCredentials: true})
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
                //url: 'http://bcs.rubywebs.net/users/sign_in',
                url: 'https://bcs-nlblunt.c9.io/users/sign_in',
                //params: {username: uname, password: pword},
                data: {username: uname, password: pword}
            })
        .then(function(result)
        {
            defer.resolve(result.data);
        },
        function(result)
        {
            defer.reject(result.data);
        });
        
        return defer.promise;
    };
    
    this.get_server_books = function()
    {
        var defer = $q.defer();
        
        $http.get("https://bcs-nlblunt.c9.io/list_books")//"http://bcs.rubywebs.net/list_books")
        .then(function(result)
        {
            defer.resolve(result.data);
        },
        function(result)
        {
            defer.reject(result.data.e);
        });
        
            return defer.promise;
    };
    
    this.add_book_from_google = function(book, user_id, finished)
    {
        console.log(book);
        var defer = $q.defer();
        
        $http.post("https://bcs-nlblunt.c9.io/add_book_google", //("http://bcs.rubywebs.net/add_book_google", 
        {user_id: user_id, finished: finished, book:{title: book.title, author: book.author, description: book.description,
            cover: book.cover,
            pages: book.pages, google_id: book.google_id}
        }).then(function(result)
        {
            defer.resolve(result);
        },
        function(result)
        {
            defer.reject(result);
        });
        
        return defer.promise;
    };
    
    //Gets a list of ALL user books
    this.get_user_books = function(user_id)
    {
        var defer = $q.defer();
        
        $http.post("https://bcs-nlblunt.c9.io/get_user_books", //("http://bcs.rubywebs.net/get_user_books",
        {
            user_id: user_id
        }).then(function(result)
        {
            defer.resolve(result.data);
        },
        function(result)
        {
            defer.reject(result.data);
        });
        
        return defer.promise;
    };
    
    //Gets a list of only CURRENTLY READING books
    this.get_user_current_books = function(user_id)
    {
        var defer = $q.defer();
        
        $http.post("https://bcs-nlblunt.c9.io/get_current_books", //("http://bcs.rubywebs.net/get_user_books",
        {
            user_id: user_id
        }).then(function(result)
        {
            defer.resolve(result.data);
        },
        function(result)
        {
            defer.reject(result.data);
        });
        
        return defer.promise;
    };
    
    this.get_book_forum = function(book_id)
    {
        var defer = $q.defer();
        
        $http.get("https://bcs-nlblunt.c9.io/get_book_forum", {params:{book_id: book_id}})
        .then(function(result)
        {
            defer.resolve(result.data);
        },
        function(result)
        {
            defer.reject(result.data);
        });
        
        return defer.promise;
    };
    
    this.add_post = function(book_id, title, body, user_id)
    {
        var defer = $q.defer();
        
        $http.post("https://bcs-nlblunt.c9.io/add_post",
        {
            book_id: book_id, post_title: title, post_body: body, user_id: user_id
        }).then(function(result)
        {
            defer.resolve(result.data);
        },
        function(result)
        {
            defer.reject(result.data);
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