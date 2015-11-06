//Initialize the angularJS controllers
var appControllers = angular.module('appControllers', ['appServices']);

/* Create the controllers for projectApp */

//Controller for home
appControllers.controller('homeController', ['$scope', 'googleBooks', 'bcs', '$cookies', function($scope, googleBooks, bcs, $cookies)
{
    //Set initial signed_in status = false
    $scope.signed_in = false;
    $scope.signed_in = true;
    
    //Set initial stage = main_content
    $scope.stage = "main_content";
    
    $scope.server_books =[];
    
    //bcs.status_check();

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
    
    //Set Stage
    $scope.set_stage = function(val)
    {
        $scope.stage = val;
        
        //If stage == add_book
        if($scope.stage == 'add_book')
        {
            bcs.get_server_books()
            .then(function(result)
            {
                $scope.hidden_server_books = result;
            },
            function(result)
            {
                console.log(result);
            });
        }
    };
    
    $scope.added = function(book)
    {
        var ids = [{id: "xQxhQgAACAAJ"}, {id: "H1w9AwAAQBAJ"}];
        
        var res = $.grep(ids, function(e){return e.id == book.id});
        
        if(res.length > 0)
        {
            console.log("Book Found");
            return 1;
        }
        
        return 0;
    };
    
    $scope.searchBooks = function()
    {
        //Search Google Books
        googleBooks.book_by_name($scope.search)
        .then(function(result)
        {
            $scope.results = result;
        });
        
        //Assign Book Server books to scope
        $scope.server_books = $scope.hidden_server_books;
    };
    
    $scope.addBookFromGoogle = function(book, finished)
    {
        var new_book = 
            {
                title: book.volumeInfo.title, 
                author: book.volumeInfo.authors[0], 
                description: book.volumeInfo.description,
                cover: book.volumeInfo.imageLinks.thumbnail,
                pages: book.volumeInfo.pageCount, 
                google_id: book.id
            };
            
        bcs.add_book_from_google(1, new_book, finished)
        .then(function(result)
        {
            console.log($scope.server_books);
            $scope.server_books.push(new_book);
            console.log($scope.server_books);
        },
        function(result)
        {
            console.log(result);
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