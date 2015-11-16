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
    
    //Check to see if the book has already been added to users shelf
    $scope.added = function(book)
    {
        //FAKE SHELF.  GET REAL GOOGLE_BOOK IDS FROM USER SHEVES
        var ids = [{id: "xQxhQgAACAAJ"}, {id: "H1w9AwAAQBAJ"}];
        
        //Compare IDS from user shelves against search returns
        var res = $.grep(ids, function(e){return e.id == book.id});
        
        //If res > 0, then the book ID is in a shelf.  Return 1 so the book is ommited from the results
        if(res.length > 0)
        {
            console.log("Book Found");
            return 1;
        }
        
        return 0;
    };
    
    //Search Google Books
    $scope.searchBooks = function()
    {
        googleBooks.book_by_name($scope.search)
        .then(function(result)
        {
            $scope.results = result;
        });
        
        //Assign Book Server books to scope
        $scope.server_books = $scope.hidden_server_books;
    };
    
    //Add a book to the server from Google Books and assign to users shelf
    //and finished state
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
        
        //Add test user
        var test_user_id = 1;
        
        //Add the book to the server
        bcs.add_book_from_google(new_book, test_user_id)// $scope.user.id)
        .then(function(result)
        {
            //SUCCUSSFUL
            //Push book to server_books to avoid unncessary server book call
            $scope.server_books.push(new_book);
            
            //Add new_book to users default shelf with read / reading status
            
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