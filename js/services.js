//Initialize the angularJS services
var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('user', function($resource, $q)
{
    var self = {};
    
    var user = $resource('https://bcs-nlblunt.c9.io/users/sign_in', {id:'@id'});
    
	self.userLogin = function(login)
	{
		var deferred = $q.defer();
		
		var new_user = new user({username: login.name, password: login.password});
		
		//Attempt to save the session
		new_user.$save()
		.then(
			function(result)
			{
				deferred.resolve(result);
			},
			function()
			{
				deferred.reject();
			});
			
			return deferred.promise;
	};
	
	return self;
});

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

appServices.service('bcs', function($http, $q)
{
    //Get server status
    this.status_check = function()
    {
        var defer = $q.defer();
        
        //$http.get('https://bcs.rubywebs.net/status_check')
        $http.get('https://bcs-nlblunt.c9.io/status_check.json')
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
        
        var token = readCookie("XSRF-TOKEN");
        console.log(token);
        
        //$http.post('https://bcs.rubywebs.net/users/sign_in', {username: uname, password: pword, password_confirmation: pword})
        $http(
            {
                method: 'POST',
                url: 'https://bcs-nlblunt.c9.io/users/sign_in', 
                params: {username: uname, password: pword, password_confirmation: pword},
                withCredentials: true,
                headers: {'X-XSRF-TOKEN' : 'aaaa'}
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




appServices.factory(['XSRFInterceptor', function() {
    var XSRFInterceptor = {
        request: function(config) {
            var token = readCookie('XSRF-TOKEN');
            if (token) {
                config.headers['X-XSRF-TOKEN'] = token;
            }
            return config;
        }
    };
    return XSRFInterceptor;
}]);
