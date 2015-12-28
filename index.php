<!DOCTYPE html>

<html ng-app="projectApp">
<head>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    
    <!-- Load jQuery -->
    <!-- <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> -->
    
    <!-- Latest compiled and minified Bootstrap JavaScript -->
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js"></script>
    <!-- Start AngularJS -->
    <!-- <script src="../AngularJS/angular-1.4.7/angular.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-cookies.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-resource.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-route.js"></script>
    <script src="app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/services.js"></script>
</head>

<body class="container-fluid" ng-controller="homeController as homeCtrl">
    
    <!-- Header row-->
    <div class="row">
        
        <!-- 10 col, offset 1 col right -->
        <div class="col-md-10 col-md-offset-1">
            
            <!-- header.php -->
            <?php include("partials/header.php"); ?>
        </div>
    </div>
    
    <!-- Show only if Signed in -->
    <div class="row" ng-show="signed_in">
        
        <!-- 10 col, offset 1 col right -->
        <div class="col-md-10 col-md-offset-1">
            
             <!-- Horizontal Navbar -->
             <?php include("partials/nav.php"); ?> 
            
            <!-- Row for MAIN CONTENT -->
            <div class="row" id="main_content" ng-show="stage == 'main_content'">
                
                <!-- Current Book : Left column, 5 col wide -->
                <?php include("partials/current_book.php"); ?>

                <div class="col-md-4">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/844DzynPG-w" frameborder="0" allowfullscreen></iframe>
                </div>
                <!-- Read Books : Right column, 7 col wide -->
                <!-- ?php include("partials/read_books.php"); ?> -->
            </div>
            
            <!-- Row for ADD BOOK -->
            <div class="row" id="add_book" ng-show="stage == 'add_book'">
                <!-- Search bar for book search, both local and google -->
                <form class="form">
                    <input class="form-control" ng-model="search" ng-change="searchBooks()" ng-model-options="{debounce: 1000}" type="text"></input>
                </form>
                <br>
                <!-- Books on Server : Left column, 6 col wide -->
                <?php include("partials/server_books.php"); ?>
                
                <!-- Book search from Google Books : Right Column, 6 col wide -->
                <?php include("partials/google_books.php"); ?>
            </div>
            
            <!-- Row for BOOKSHELVES -->
            <div class="row" id="bookshelves" ng-show="stage == 'bookshelves'">
                <!-- Bookshelf list for user : 4 col wide -->
                <?php include("partials/bookshelf_list.php"); ?>
                
                <!-- Books on selected bookshelf : 8 col wide -->
                <?php include("partials/bookshelf_books.php"); ?>
            </div>
            
            <!-- Row for FORUM -->
            <div class="row" id="forum" ng-show="stage == 'forum'">
                <!-- Forum : 12 col wide -->
                <?php include("partials/forum.php"); ?>
            </div>
            
            <!-- Footer -->
            
        </div>
    </div>
</body>
</html>